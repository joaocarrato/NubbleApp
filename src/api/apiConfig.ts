import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response, // Pass through successful responses
    async interceptorError => {
      const failedRequest = interceptorError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      // If the error is due to unauthorized access (401)
      if (interceptorError.response?.status === 401) {
        if (
          hasNotRefreshToken ||
          isRefreshTokenRequest ||
          failedRequest === true
        ) {
          // If no refresh token is available, remove credentials and reject the error
          removeCredentials();
          return Promise.reject(interceptorError);
        }

        failedRequest.sent = true;

        // Attempt to refresh the token using the refresh token
        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );

        // Save the new credentials
        saveCredentials(newAuthCredentials);

        // Retry the failed request with the new token
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }
    },
  );

  // Cleanup the interceptor when the component unmounts or authCredentials change
  return () => api.interceptors.response.eject(interceptor);
}

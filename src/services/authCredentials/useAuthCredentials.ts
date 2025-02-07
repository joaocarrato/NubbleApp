import {useContext} from 'react';

import {AuthCredentialsService} from './authCredentialsType';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error(
      'AuthCredentials should be used within an AuthContextProvider',
    );
  }

  return context;
}

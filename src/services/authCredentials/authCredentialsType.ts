import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  isLoading: boolean;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}

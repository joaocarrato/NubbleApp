import {AuthCredentials} from '@domain';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2025-05-15 13:38:51.262-03',
  refreshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png',
    isOnline: false,
    fullName: 'Maria Julia',
  },
};

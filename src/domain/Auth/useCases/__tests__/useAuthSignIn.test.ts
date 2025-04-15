import {AllTheProviders, renderHook, waitFor} from 'test-utils';

import {authService} from '../../authServices';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mockedData/mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => {
  const originalModules = jest.requireActual('@services');
  return {
    ...originalModules,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});
describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });

    result.current.signIn({email: 'joao@coffstack.com', password: '123'});

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
  });
});

import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = '/users';

async function getById(userId: string): Promise<UserAPI> {
  const user = await api.get<Promise<UserAPI>>(`${PATH}/${userId}`);

  return user.data;
}

export const userApi = {getById};

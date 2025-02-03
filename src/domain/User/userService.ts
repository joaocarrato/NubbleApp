import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(userId: number): Promise<User> {
  const user = await userApi.getById(userId.toString());

  return userAdapter.toUser(user);
}

export const userService = {getById};

import {User, UserAPI} from './userTypes';

function toUser(user: UserAPI): User {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
    email: user.email,
    profileUrl: user.profile_url,
    isOnline: user.is_online,
    fullName: user.full_name,
  };
}

export const userAdapter = {toUser};

import {useCallback, useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserGetById(id: number) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    loading,
    error,
  };
}

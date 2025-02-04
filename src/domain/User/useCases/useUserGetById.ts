import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

const FETCH_DATA_TIME = 1000 * 30;

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: FETCH_DATA_TIME,
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}

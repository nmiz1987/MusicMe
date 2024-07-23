import { useQuery, useQueryClient, UseQueryResult, QueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

export interface UseQueryCustomProps<T> extends QueryOptions<T> {
  queryKey: unknown[];
  queryFn: () => Promise<T>;
  abortOnTimeOut?: boolean;
  enabled?: boolean;
}

const useQueryCustom = <T extends any>({ queryKey, queryFn, abortOnTimeOut = true, enabled = true }: UseQueryCustomProps<T>): UseQueryResult<T> => {
  const queryClient = useQueryClient();

  const response = useQuery<T>({
    queryKey,
    queryFn,
    enabled,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if ((response.isPending || response.isFetching) && abortOnTimeOut) {
        queryClient.cancelQueries({ queryKey, exact: true });
      }
    }, 30000); // 30 seconds

    if (abortOnTimeOut) return () => clearTimeout(timer);
    return () => {};
  }, [abortOnTimeOut, queryClient, queryKey, response.isPending, response.isFetching]);

  return response;
};

export default useQueryCustom;

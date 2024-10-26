import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import { QueryAdapter } from "./adapters/queryAdapters";

export function useCustomQuery<Result>({
  queryFn,
  queryKey,
  enabled,
  refetchOnWindowFocus,
}: {
  queryKey: string[];
  queryFn: () => Promise<Result>;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
}): QueryAdapter<Result> {
  const { data, isPending, refetch, isRefetching, isError, isSuccess } =
    useQuery({
      queryKey,
      queryFn,
      enabled: enabled ? enabled : true,
      refetchOnWindowFocus: refetchOnWindowFocus ? refetchOnWindowFocus : false,
    });
  return {
    query: () => Promise.resolve(data as Result),
    data: data as Result,
    isPending: isPending,
    refetch,
    isRefetching,
    isError,
    isSuccess,
  };
}

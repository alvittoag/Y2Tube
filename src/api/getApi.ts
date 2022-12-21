import axios from "axios";
import { useQuery } from "react-query";
import { DataApi } from "../Model";

interface GetApi {
  data: DataApi | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  isFetching: boolean;
}

export const getApi = (endpoint: string) => {
  const { data, isLoading, isError, refetch, isFetching }: GetApi = useQuery({
    queryKey: ["result"],
    queryFn: () =>
      axios
        .get(endpoint)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, refetch, isFetching };
};

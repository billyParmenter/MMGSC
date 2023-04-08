import { useQuery } from "react-query";
import { fetchAids } from "../queries";

export const useAids = () => {
  const { data, isLoading, error } = useQuery(
    ["aids"],
    () => fetchAids(),
  );

  return { aids: data, isLoading, error };
};
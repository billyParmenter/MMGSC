import { useQuery } from "react-query";
import { fetchAtms } from "../queries";

export const useAtms = () => {
  const { data, isLoading, error } = useQuery(
    ["atms"],
    () => fetchAtms(),
  );
  return { atms: data, isLoading, error };
};
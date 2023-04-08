import { useQuery } from "react-query";
import { fetchAtms } from "../queries";
import { Atm } from "..";

export const useAtms = () => {
  const { data, isLoading, error } = useQuery(
    [],
    () => fetchAtms(),
  );

  let atms: Atm[]

  if (data != undefined) {
    atms = data
  } else {
    atms = []
  }

  return { atms, isLoading, error };
};
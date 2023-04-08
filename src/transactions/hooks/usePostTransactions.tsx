import { useQuery } from "react-query";

import { postTransactions } from "../queries";
import { Transaction } from "..";
import { useAtms } from "@/atms/hooks/useAtms";

interface UsePostTransactions {
  atmId: number[] | string;
  date0: string;
  date1: string;
  aidId?: string;
  pan?: string;
  ref?: number;
}

export const usePostTransactions = (values: UsePostTransactions) => {
  console.log(values);
  const { atms } = useAtms();
  if (values.atmId === "") {
    const allAtms = atms.map((atm) => atm.id);

    values.atmId = allAtms;
  }
  const { data, isLoading, error } = useQuery(["transactions", values], () =>
    postTransactions(values)
  );

  let transactions: Transaction[];

  if (data != undefined && "txn" in data) {
    transactions = data["txn"] as Transaction[];
  } else {
    transactions = [];
  }

  return { transactions, isLoading, error };
};

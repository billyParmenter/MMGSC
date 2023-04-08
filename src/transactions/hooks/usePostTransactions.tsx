import { useQuery } from "react-query";

import { postTransactions } from "../queries";
import { Transaction } from "..";

interface UsePostTransactions {
  atmId: number[];
  date0: string;
  date1: string;
  aidId?: string;
  pan?: string;
  ref?: number;
}

export const usePostTransactions = (values: UsePostTransactions) => {
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

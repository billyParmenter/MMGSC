import { useQuery } from "react-query";

import { fetchTransactions } from "../queries";
import { Transaction } from "..";

interface UseTransactions {
  atmid: string;
  datetime: string;
}

export const useTransactions = ({ atmid, datetime }: UseTransactions) => {
  const { data, isLoading, error } = useQuery(
    ["transactions", { atmid, datetime }],
    () => fetchTransactions({ atmid, datetime })
  );

  let transactions: Transaction[];

  if (data != undefined && "txn" in data) {
    transactions = data["txn"] as Transaction[];
  } else {
    transactions = [];
  }

  return { transactions, isLoading, error };
};

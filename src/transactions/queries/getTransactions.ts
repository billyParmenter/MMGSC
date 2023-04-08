import http from "@/lib/http";
import { Transaction } from "..";

interface FetchTransactions {
  atmid: string;
  datetime: string;
}

export const fetchTransactions = async ({ atmid, datetime }: FetchTransactions) => {
  const n = 1
  return await http.get<Transaction[]>(`/txnlist/${atmid}/${datetime}/v1`, { params: { n } } );
};
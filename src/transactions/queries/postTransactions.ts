import http from "@/lib/http";
import { Transaction } from "..";

interface PostTransactions {
  atmId: number[];
  date0: string;
  date1: string;
  aidId?: string;
  pan?: string;
  ref?: number;
}
export const postTransactions = async (values: PostTransactions) => {
  return await http.post<Transaction[]>(`/v1`, JSON.stringify(values), {headers: {"Content-Type": "application/json"}} );
};
import http from "@/lib/http";
import { Atm } from "..";


export const fetchAtms = async () => {
  return await http.get<Atm[]>("/atmlist/v1");
};
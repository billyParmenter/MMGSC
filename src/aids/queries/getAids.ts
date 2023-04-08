import http from "@/lib/http";
import { Aid } from "..";


export const fetchAids = async () => {
  return await http.get<Aid[]>("/aidlist/v1");
};
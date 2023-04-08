import { apiUrl } from "../../util/url";
import { getError, makeAxiosApi } from "./axios";
import { makeHttp } from "./http";

const api = makeAxiosApi("https://dev.smartjournal.net:443/um/test/api/jr/txn");

export const http = makeHttp(api, getError);

export default http;
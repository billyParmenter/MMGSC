import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const getError = (error: any) => {
  if (error.isAxiosError && error.response) {
    return error.response.data.error.message;
  }
  return "Unexpected error";
};

export const makeAxiosApi = (baseUrl: string) => {
  const api = axiosAdapter(baseUrl);

  return {
    get: api.get,
    post: api.post,
    patch: api.patch,
    deleteReq: api.deleteReq,
  };
};

const axiosAdapter = (baseUrl: string) => {
  const api: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    withCredentials: false,
  });

  async function get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return await api.get(url, config);
  }

  async function post(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return await api.post(url, body, config);
  }

  async function patch(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return await api.patch(url, body, config);
  }
  async function deleteReq(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return await api.delete(url, config);
  }

  return {
    get,
    post,
    patch,
    deleteReq,
  };
};
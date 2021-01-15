/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance, AxiosResponse } from "axios";

declare module "axios" {
  type AxiosDataResponse<T = any> = Promise<T>;
}

abstract class RequestClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
export default RequestClient;

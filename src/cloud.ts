import { AxiosDataResponse } from "axios";
import RequestClient from "./client";

interface KeyData {
  keyId: string;
  key: string;
  value: string;
}

interface KeyResponse {
  statusCode: string;
  message: string;
  data: KeyData;
}

class DotCloudRepository extends RequestClient {
  public constructor(url = "http://dotcloud.azurewebsites.net/") {
    super(url);
  }

  public getKey = async (
    key: string,
    projectToken: string,
    projectName: string
  ): AxiosDataResponse => {
    const response = await this.instance
      .get<KeyResponse>(
        `/keys/?keyName=${key}&token=${projectToken}&projectName=${projectName}`
      )
      .catch((err) => {
        console.log(`Cannot reach servers due to ${err}`);
      });
    return response;
  };

  public getAllKeys = async (
    projectToken: string,
    projectName: string
  ): AxiosDataResponse => {
    const response = await this.instance
      .get<KeyResponse>(
        `/keys/all?token=${projectToken}&projectName=${projectName}`
      )
      .catch((err) => {
        console.log(`Cannot reach server due to ${err}`);
      });
    return response;
  };
}

export default DotCloudRepository;

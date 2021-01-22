/* eslint-disable import/prefer-default-export */
import { AxiosDataResponse } from "axios";
import DotCloudRepository from "./cloud";

class DotCloud {
  private repository: DotCloudRepository;

  private projectToken: string;

  private projectName: string;

  constructor(projectToken: string, projectName: string, url?: string) {
    this.repository = new DotCloudRepository(url);
    this.projectToken = projectToken;
    this.projectName = projectName;
  }

  fetchKey = async (key: string): AxiosDataResponse => {
    const response = await this.repository.getKey(
      key,
      this.projectToken,
      this.projectName
    );
    return response.data.value;
  };

  fetchAllKeys = async (): AxiosDataResponse => {
    const response = await this.repository.getAllKeys(
      this.projectToken,
      this.projectName
    );
    return response.data;
  };
}

const init = (
  projectToken: string,
  projectName: string,
  url?: string
): DotCloud => {
  const dotCloudInit = new DotCloud(projectToken, projectName, url);
  return dotCloudInit;
};

export { init };

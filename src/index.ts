import { AxiosDataResponse } from "axios";
import DotCloudRepository from "./cloud";

class DotCloud {
  private repository: DotCloudRepository;

  private projectToken: string;

  constructor(projectToken: string, url?: string) {
    this.repository = new DotCloudRepository(url);
    this.projectToken = projectToken;
  }

  fetchKey = async (key: string): AxiosDataResponse => {
    const response = await this.repository.getKey(key, this.projectToken);
    return response.data.value;
  };

  fetchAllKeys = async (): AxiosDataResponse => {
    const response = await this.repository.getAllKeys(this.projectToken);
    return response.data.keys;
  };
}

const init = (projectToken: string, url?: string): DotCloud => {
  const dotCloudInit = new DotCloud(projectToken, url);
  return dotCloudInit;
};

export default init;

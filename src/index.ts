import { AxiosDataResponse } from "axios";
import DotCloud from "./cloud";

const repository: DotCloud = new DotCloud();
const dotCloud = async (
  key: string,
  projectToken: string
): AxiosDataResponse => {
  const response = await repository.getKey(key, projectToken);
  return response;
};

export default dotCloud;

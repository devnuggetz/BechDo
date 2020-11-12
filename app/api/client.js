import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://157.35.247.104:9000/api",
});

export default apiClient;

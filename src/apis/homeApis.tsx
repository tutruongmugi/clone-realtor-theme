import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

export const HomeApis = {
  getList: async () => await axios.get(apiUrl + "homes"),
  getHomeDetail: async (id: string) => await axios.get(apiUrl + `homes/${id}`),
};

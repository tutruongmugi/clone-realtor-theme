import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

export const AuthApis = {
  loginApi: async ( email: string,password: string ) =>
    await axios.post(apiUrl + "auth/login", {
      email: email,
      password: password,
    }),
};

 
import React, {  useContext, useState } from "react";
import { AuthApis } from "../apis/auth";
import { User } from "../interface";

const AuthenticationContext = React.createContext<{
  userInfo: User;
  accessToken: string;
  login: (email: string, password: string) => void;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
} | null>(null);

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    name: "",
    phone: "",
  });
  const [accessToken, setAccessToken] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  const login = async (email: string, password: string) => {
    try {
      const result = await AuthApis.loginApi(email, password);
      setUserInfo(result.data.user);
      setAccessToken(result.data.access_token);
      setIsAuthenticated(true)
    } catch (error) {
      console.log("error: ",error)
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{ userInfo, accessToken, login, isAuthenticating,isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuth = () => {
  const store = useContext(AuthenticationContext);
  return store;
};

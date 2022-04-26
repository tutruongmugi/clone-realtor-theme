import React, { useContext, useState } from "react";
import { HomeApis } from "../apis/homeApis";
import { Home } from "../interface";

const HomeDetailContext = React.createContext<{
  home: Home;
  loadHome: (id: string) => void;
  gettingHome: boolean;
} | null>(null);

export default function HomeDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [home, setHome] = useState({});
  const [gettingHome, setGettingHome] = useState(true);

  const loadHome = async (id: string) => {
    console.log("FFFFF");
    try {
      const result = await HomeApis.getHomeDetail(id);
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <HomeDetailContext.Provider value={{ home, gettingHome, loadHome }}>
      {children}
    </HomeDetailContext.Provider>
  );
}

export const useHomeDetail = () => { 
  const store = useContext(HomeDetailContext);
  return store;
};

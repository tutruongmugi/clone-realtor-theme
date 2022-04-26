import React, { useContext, useState } from "react";
import { HomeApis } from "../apis/homeApis";
import { Home } from "../interface";

const HomesContext = React.createContext<{
  homes: Home[];
  loadHomes: () => void;
  gettingHomes: boolean;
}>({
  homes: [],
  loadHomes: () => {},
  gettingHomes: false,
});

export default function HomesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homes, SetHomes] = useState([]);
  const [gettingHomes, setGettingHomes] = useState(true);

  const loadHomes = async () => {
    try {
      const result = await HomeApis.getList();
      console.log("result: ", result);
      await SetHomes(result.data.data.homes);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setGettingHomes(false);
    }
  };

  return (
    <HomesContext.Provider value={{ homes, loadHomes, gettingHomes }}>
      {children}
    </HomesContext.Provider>
  );
}

export const useHomes = () => {
  const store = useContext(HomesContext);
  return store;
};

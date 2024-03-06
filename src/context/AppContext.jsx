import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        name: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

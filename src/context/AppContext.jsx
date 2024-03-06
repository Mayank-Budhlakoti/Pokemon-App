import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import usePokemonApi from "./usePokemonApi";
import usePokemonDetailApi from "./usePokemonDetailApi";

const UPDATE_POKEMON = "update/pokemon";

export const updatePokemon = (payload) => ({
  type: UPDATE_POKEMON,
  payload,
});
const UPDATE_POKEMON_DATA = "Update/pokemonData";
const updatePokemonData = (payload) => ({
  type: UPDATE_POKEMON_DATA,
  payload,
});

export const appReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POKEMON:
      return { ...state, pokemon: action.payload };
    case UPDATE_POKEMON_DATA:
      return { ...state, pokemonData: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext(null);
const AppContextDispatch = createContext(null);

export const useAppContext = () => useContext(AppContext);
export const useAppContextDispatch = () => useContext(AppContextDispatch);

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/",
    pokemonData: { results: [] },
    pokemon: {},
  });

  const pokemonData = usePokemonApi();

  const pokemonDetail = usePokemonDetailApi(state.pokemon.url);

  useEffect(() => {
    dispatch(updatePokemonData(pokemonData));
  }, [pokemonData]);

  useEffect(() => {
    dispatch(updatePokemon({ ...state.pokemon, ...pokemonDetail }));
  }, [pokemonDetail]);

  return (
    <AppContext.Provider value={state}>
      <AppContextDispatch.Provider value={dispatch}>
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
}

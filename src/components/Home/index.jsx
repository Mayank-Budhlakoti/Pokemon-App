import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
  updatePokemon,
  useAppContext,
  useAppContextDispatch,
} from "../../context/AppContext";

export const setImageUrl = (index, imageUrl) => {
  if (index <= 9) return imageUrl + "00" + index + ".png";
  else if (index > 9) return imageUrl + "0" + index + ".png";
  else if (index > 99) return imageUrl + index + ".png";
};

export default function Home() {
  const {
    pokemonData: { results = [] },
    imageUrl,
  } = useAppContext();

  const dispatch = useAppContextDispatch();

  const handleClick = (result) => {
    dispatch(updatePokemon(result));
  };
  return (
    <div className="home_container">
      {results.map((result, index) => {
        return (
          <Link
            to="/details"
            key={result.name}
            onClick={() => handleClick({ ...result, index: index + 1 })}
          >
            <div className="home_blocks">
              <img
                src={setImageUrl(index + 1, imageUrl)}
                alt="Pokemon image"
                className="card_image"
              />
              <h3>{result.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

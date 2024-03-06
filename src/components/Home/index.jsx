import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleClick = (result) => {
    dispatch(updatePokemon(result));
    navigate("/details");
  };
  return (
    <div className="home_container">
      {results.map((result, index) => {
        return (
          <div
            className="home_blocks"
            key={result.name}
            onClick={() => handleClick({ ...result, index: index + 1 })}
          >
            <img
              src={setImageUrl(index + 1, imageUrl)}
              alt="Pokemon image"
              className="card_image"
            />
            <h3>{result.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

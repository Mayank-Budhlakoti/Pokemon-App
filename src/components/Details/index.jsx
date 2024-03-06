import React from "react";
import { useAppContext } from "../../context/AppContext";
import { setImageUrl } from "../Home";
import "./index.css";

export default function Details() {
  const { pokemon, imageUrl } = useAppContext();
  return (
    <div className="details_container">
      <img
        src={setImageUrl(pokemon.index, imageUrl)}
        alt="Pokemon image"
        className="details_image"
      />
      <div>
        <h1>{pokemon.name}</h1>
        <div>
          <h3>Abilities</h3>
          <span>fire</span>
          <span>water</span>
        </div>
        <div>
          <h3>Moves</h3>
          <span>fire</span>
          <span>water</span>
        </div>
        <div>
          <h3>Types</h3>
          <span>fire</span>
          <span>water</span>
        </div>
      </div>
    </div>
  );
}

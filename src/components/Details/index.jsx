import { get } from "lodash";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import { setImageUrl } from "../Home";
import "./index.css";

export default function Details() {
  const {
    pokemon: { index = 0, name = "", abilities = [], moves = [], types = [] },
    imageUrl,
  } = useAppContext();
  return (
    <div className="details_container">
      <img
        src={setImageUrl(index, imageUrl)}
        alt="Pokemon image"
        className="details_image"
      />
      <div>
        <h1>{name}</h1>
        <div>
          <h3>Abilities</h3>
          {abilities.map((val) => {
            return <span>{get(val, "ability.name")}</span>;
          })}
        </div>
        <div className="details_moves">
          <h3>Moves</h3>
          {moves.map((val) => {
            return <span>{get(val, "move.name")}</span>;
          })}
        </div>
        <div>
          <h3>Types</h3>
          {types.map((val) => {
            return <span>{get(val, "type.name")}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

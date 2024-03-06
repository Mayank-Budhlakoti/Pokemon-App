import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const Card = () => {
  const { name } = useAppContext();
  return (
    <div className="home_blocks">
      <img src={name} alt="Pokemon image" className="card_image" />
      <h3>charizard</h3>
    </div>
  );
};

export default function Home() {
  return (
    <div className="home_container">
      {new Array(20).fill(0).map(() => {
        return (
          <Link to="/details">
            <Card />
          </Link>
        );
      })}
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function usePokemonApi() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e));
  };

  return data;
}

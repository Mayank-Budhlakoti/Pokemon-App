import React, { useEffect, useState } from "react";

export default function usePokemonDetailApi(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e));
  };

  return data;
}

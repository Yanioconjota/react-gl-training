import React from "react";
import HeroList from "../heroes/HeroList";

export const MarvelScreen = () => {
  const publisher = 'Marvel Comics'
  return (
    <>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};

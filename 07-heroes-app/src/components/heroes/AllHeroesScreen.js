import React from "react";
import HeroList from "./HeroList";

export const AllHeroesScreen = () => {
  return (
    <>
      <h1>Heroes</h1>
      <hr />
      <HeroList publisher="all"/>
    </>
  );
};

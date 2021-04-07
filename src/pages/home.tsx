import React from "react";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { fetchRecipies } from "../store/recipies/slice";

import RecipieCard from "../components/RecipieCard";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const recipies = useAppSelector((state) => state.recipies);

  dispatch(fetchRecipies(1));

  const recipiesCards = recipies.map((recipie) => (
    <RecipieCard
      key={Math.random()}
      photo=""
      name={recipie.name}
      stars={recipie.stars}
    />
  ));

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(0, 300px))",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        padding: "16px",
      }}
    >
      {recipiesCards}
    </ul>
  );
};

export default HomePage;

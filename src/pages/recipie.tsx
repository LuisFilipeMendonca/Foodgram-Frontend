import React from "react";
import { useParams, Redirect } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppSelector";

import RecipieFullCard from "../components/RecipieFullCard";

const MyRecipiesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipie = useAppSelector((state) =>
    state.recipies.recipies.find((recipie) => recipie._id === id)
  );

  if (!recipie) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <RecipieFullCard
        description={recipie!.description}
        duration={recipie!.duration}
        ingredients={recipie!.ingredients}
        name={recipie!.name}
        photo={recipie!.photoUrl}
        servings={recipie!.servings}
        steps={recipie!.steps}
        key={id}
        level={recipie!.level}
      />
    </div>
  );
};

export default MyRecipiesPage;

import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { setPath } from "../store/location/slice";

import RecipieFullCard from "../components/RecipieFullCard";

const MyRecipiesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const recipie = useAppSelector((state) =>
    state.recipies.recipies.find((recipie) => recipie._id === id)
  );

  useEffect(() => {
    if (!recipie) return;
    dispatch(setPath("/recipies"));
  }, [dispatch, recipie]);

  if (!recipie) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        padding: "0 8px",
      }}
    >
      <RecipieFullCard
        description={recipie.description}
        duration={recipie.duration}
        ingredients={recipie.ingredients}
        name={recipie.name}
        photo={recipie.photo}
        servings={recipie.servings}
        steps={recipie.steps}
        key={id}
        level={recipie.level}
        createdAt={recipie.createdAt}
        photoUrl={recipie.photoUrl}
        ratings={recipie.ratings}
        user={recipie.user}
        votes={recipie.votes}
        votesCount={recipie.votesCount}
        _id={recipie._id}
      />
    </div>
  );
};

export default MyRecipiesPage;

import React from "react";
import { FaCircle } from "react-icons/fa";

import {
  CardIngredientsContainer,
  CardIngredient,
  CardIngredientDescription,
  CardIngredientBullet,
} from "./styled";

interface IRecipieIngredients {
  ingredients: string[];
}

const CardIngredients: React.FC<IRecipieIngredients> = ({ ingredients }) => {
  return (
    <CardIngredientsContainer>
      {ingredients.map((ingredient) => (
        <CardIngredient key={Math.random()}>
          <CardIngredientBullet>
            <FaCircle />
          </CardIngredientBullet>
          <CardIngredientDescription>{ingredient}</CardIngredientDescription>
        </CardIngredient>
      ))}
    </CardIngredientsContainer>
  );
};

export default CardIngredients;

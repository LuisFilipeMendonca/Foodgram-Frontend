import React from "react";

import { CardStar, CardStarPolygon, CardStarsContainer } from "./styled";

interface IRecipieRating {
  isLoading?: boolean;
  votes?: number;
  votesCount?: number;
}

const RecipieRating: React.FC<IRecipieRating> = ({
  isLoading,
  votes,
  votesCount,
}) => {
  const addRatingHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    console.log(e.currentTarget.getAttribute("data-rating"));
  };

  const stars = Math.round(votes || 0 / (votesCount || 0));

  return (
    <CardStarsContainer isLoading={isLoading}>
      {Array.from({ length: 5 }, (_, idx) => idx + 1).map((value) => (
        <CardStar
          key={value}
          data-rating={value}
          tabIndex={0}
          onClick={addRatingHandler}
          onKeyPress={addRatingHandler}
        >
          <CardStarPolygon
            isFilled={value <= stars}
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          />
        </CardStar>
      ))}
    </CardStarsContainer>
  );
};

export default RecipieRating;

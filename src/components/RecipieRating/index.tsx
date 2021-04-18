import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addRating } from "../../store/recipies/slice";

import {
  CardStar,
  CardStarPolygon,
  CardStarsContainer,
  StarsContent,
  Tooltip,
} from "./styled";

interface IRecipieRating {
  isLoading?: boolean;
  votes?: number;
  votesCount?: number;
  recipieId?: string;
  rateId?: string;
}

const RecipieRating: React.FC<IRecipieRating> = ({
  isLoading,
  votes,
  votesCount,
  recipieId,
  rateId,
}) => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((state) => state.user);
  const [showTooltip, setShowTooltip] = useState(false);

  const addRatingHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (!isLogged) {
      setShowTooltip(true);
      return;
    }
    const value = e.currentTarget.getAttribute("data-rating");

    if (!rateId && value && recipieId) {
      console.log("not rated");
      dispatch(addRating({ value: +value, recipieId }));
    }

    if (rateId) {
      console.log("rated");
    }
  };

  const stars = Math.round((votes || 0) / (votesCount || 0));

  useEffect(() => {
    let timer: number;
    if (showTooltip) {
      timer = window.setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [showTooltip]);

  return (
    <CardStarsContainer>
      <StarsContent isLoading={isLoading}>
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
      </StarsContent>
      {!isLogged && (
        <Tooltip show={showTooltip}>Login to rate this recipie</Tooltip>
      )}
    </CardStarsContainer>
  );
};

export default RecipieRating;

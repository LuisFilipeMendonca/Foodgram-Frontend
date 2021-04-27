import React, { useState, useEffect } from "react";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { addRating, deleteRating } from "../../store/recipies/slice";

import Tooltip from "../Tooltip";

import {
  CardStar,
  CardStarPolygon,
  CardStarsContainer,
  StarsContent,
} from "./styled";

interface IRecipieRating {
  isLoading?: boolean;
  votes?: number;
  votesCount?: number;
  recipieId?: string;
  rateId?: string;
  rateValue?: number | null;
  isRatable?: boolean;
}

const RecipieRating: React.FC<IRecipieRating> = ({
  isLoading,
  votes,
  votesCount,
  recipieId,
  rateId,
  rateValue,
  isRatable,
}) => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((state) => state.user);
  const [showTooltip, setShowTooltip] = useState(false);

  const addRatingHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (!isLogged || !isRatable) {
      setShowTooltip(true);
      return;
    }
    const value = e.currentTarget.getAttribute("data-rating");

    if (!rateId && value && recipieId) {
      dispatch(addRating({ value: +value, recipieId }));
    }

    if (rateId && value && recipieId) {
      dispatch(deleteRating({ value: +value, rateId, recipieId }));
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
        <Tooltip show={showTooltip} text="Login to rate this recipie" />
      )}
      {rateId && (
        <Tooltip
          show={showTooltip}
          text={`Gave ${rateValue} stars to this recipie`}
        />
      )}
      {!isRatable && (
        <Tooltip show={showTooltip} text="Can't rate your own recipies" />
      )}
    </CardStarsContainer>
  );
};

export default RecipieRating;

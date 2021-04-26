import React from "react";

import {
  CardContainer,
  CardImg,
  CardTitle,
  CardInformation,
  BtnsContainer,
} from "./styled";

import RecipieRating from "../RecipieRating";
import BaseButton from "../BaseButton";

import { IRecipieCard } from "../../interfaces/Recipies";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeFavorites, deleteRecipie } from "../../store/recipies/slice";

interface IRecipie extends IRecipieCard {
  isFavorites?: boolean;
  isRatable?: boolean;
  isUserRecipie?: boolean;
}

const RecipieCard: React.FC<IRecipie> = ({
  _id,
  name,
  photoUrl,
  votes,
  votesCount,
  ratings,
  isRatable,
  isUserRecipie,
  isFavorites,
}) => {
  const recipieLink = `/recipie/${_id}`;
  const dispatch = useAppDispatch();

  const deleteRecipieHandler = () => {
    dispatch(deleteRecipie(_id));
  };

  const deleteFavoriteHandler = () => dispatch(removeFavorites(_id));

  return (
    <CardContainer>
      <CardImg src={photoUrl} alt="recipie" />
      <CardInformation>
        <CardTitle>{name}</CardTitle>
        <RecipieRating
          votes={votes}
          votesCount={votesCount}
          isLoading={false}
          recipieId={_id}
          rateId={(ratings.length && ratings[0]._id) || ""}
          rateValue={(ratings.length && ratings[0].value) || null}
          isRatable={isRatable}
        />
        <BtnsContainer>
          {isUserRecipie ? (
            <>
              <BaseButton
                role="link"
                className="primary"
                path={`/my_recipies/edit/${_id}`}
              >
                Edit
              </BaseButton>
              <BaseButton
                type="button"
                role="button"
                className="secondary"
                clickHandler={deleteRecipieHandler}
              >
                Delete
              </BaseButton>
            </>
          ) : (
            <BaseButton role="link" className="primary" path={recipieLink}>
              View
            </BaseButton>
          )}
          {isFavorites && (
            <BaseButton
              role="button"
              className="secondary"
              clickHandler={deleteFavoriteHandler}
            >
              Remove
            </BaseButton>
          )}
        </BtnsContainer>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

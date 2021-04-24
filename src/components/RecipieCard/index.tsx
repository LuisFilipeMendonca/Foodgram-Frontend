import React from "react";
import { Link } from "react-router-dom";

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
import { deleteRecipie, logoutUser } from "../../store/user/slice";

interface IRecipie extends IRecipieCard {
  isRatable: boolean;
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
}) => {
  const recipieLink = `/recipie/${_id}`;
  const dispatch = useAppDispatch();

  const deleteRecipieHandler = () => {
    dispatch(deleteRecipie(_id));
  };

  return (
    <CardContainer>
      <CardImg src={photoUrl} />
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
              View Recipie
            </BaseButton>
          )}
        </BtnsContainer>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

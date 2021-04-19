import React from "react";
import { Link } from "react-router-dom";

import { CardContainer, CardImg, CardTitle, CardInformation } from "./styled";

import RecipieRating from "../RecipieRating";

import { IRecipieCard } from "../../interfaces/Recipies";

const RecipieCard: React.FC<IRecipieCard> = ({
  _id,
  name,
  photoUrl,
  votes,
  votesCount,
  ratings,
}) => {
  const recipieLink = `/recipie/${_id}`;

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
        />
        <Link to={recipieLink}>View Recipie</Link>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

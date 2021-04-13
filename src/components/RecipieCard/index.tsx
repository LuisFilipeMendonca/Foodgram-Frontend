import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainer,
  CardImg,
  CardTitle,
  CardInformation,
  CardActions,
} from "./styled";

import RecipieRating from "../RecipieRating";

interface IRecipieCard {
  photo: string;
  stars: number;
  name: string;
  id: string;
}

const RecipieCard: React.FC<IRecipieCard> = ({ photo, stars, name, id }) => {
  const recipieLink = `/recipie/${id}`;

  return (
    <CardContainer>
      <CardImg src={photo} />
      <CardInformation>
        <CardTitle>{name}</CardTitle>
        <CardActions>
          <RecipieRating votes={2} votesCount={8} isLoading={false} />
          <Link to={recipieLink}>View Recipie</Link>
        </CardActions>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

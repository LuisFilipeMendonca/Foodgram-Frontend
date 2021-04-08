import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainer,
  CardImg,
  CardTitle,
  CardInformation,
  CardStarsContainer,
  CardStar,
  CardStarPolygon,
} from "./styled";

interface IRecipieCard {
  photo: string;
  stars: number;
  name: string;
  id: string;
}

const RecipieCard: React.FC<IRecipieCard> = ({ photo, stars, name, id }) => {
  const addRatingHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    console.log(e.currentTarget.getAttribute("data-rating"));
  };

  const recipieLink = `/recipie/${id}`;
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <CardContainer>
      <CardImg src={photo} />
      <CardInformation>
        <CardTitle>{name}</CardTitle>
        <CardStarsContainer>
          {starsArray.map((value) => (
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
        <Link to={recipieLink}>View Recipie</Link>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

import React from "react";

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
}

const RecipieCard: React.FC<IRecipieCard> = ({ photo, stars, name }) => {
  const addRatingHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    console.log(e.currentTarget.getAttribute("data-rating"));
  };

  return (
    <CardContainer>
      <CardImg src={photo} />
      <CardInformation>
        <CardTitle>{name}</CardTitle>
        <CardStarsContainer>
          <CardStar
            data-rating="1"
            tabIndex={0}
            onClick={addRatingHandler}
            onKeyPress={addRatingHandler}
          >
            <CardStarPolygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </CardStar>
          <CardStar
            data-rating="2"
            tabIndex={0}
            onClick={addRatingHandler}
            onKeyPress={addRatingHandler}
          >
            <CardStarPolygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </CardStar>
          <CardStar
            data-rating="3"
            tabIndex={0}
            onClick={addRatingHandler}
            onKeyPress={addRatingHandler}
          >
            <CardStarPolygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </CardStar>
          <CardStar
            data-rating="4"
            tabIndex={0}
            onClick={addRatingHandler}
            onKeyPress={addRatingHandler}
          >
            <CardStarPolygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </CardStar>
          <CardStar
            data-rating="5"
            tabIndex={0}
            onClick={addRatingHandler}
            onKeyPress={addRatingHandler}
          >
            <CardStarPolygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </CardStar>
        </CardStarsContainer>
      </CardInformation>
    </CardContainer>
  );
};

export default RecipieCard;

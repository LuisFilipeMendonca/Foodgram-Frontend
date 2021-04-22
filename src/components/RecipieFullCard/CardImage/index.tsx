import React from "react";

import HeartSvg from "../../HeartSvg";

import {
  CardImageContainer,
  CardImg,
  CardImageInfo,
  CardImageInfoTop,
  CardImageInfoBottom,
  CardImageBullet,
  CardImageBulletDescription,
  CardImageTitle,
  CardImageFav,
} from "./styled";

interface ICardImage {
  isOpen: boolean;
  photoUrl: string;
  duration: number;
  servings: number;
  name: string;
}

const CardImage: React.FC<ICardImage> = ({
  isOpen,
  photoUrl,
  duration,
  servings,
  name,
}) => {
  return (
    <CardImageContainer isOpen={isOpen}>
      <CardImg src={photoUrl} />
      <CardImageInfo>
        <CardImageFav>
          <HeartSvg />
        </CardImageFav>
        <CardImageInfoTop>
          <CardImageBullet>
            <strong>{duration}</strong>
            <CardImageBulletDescription>mins</CardImageBulletDescription>
          </CardImageBullet>
          <CardImageBullet>
            <strong>{servings}</strong>
            <CardImageBulletDescription>servings</CardImageBulletDescription>
          </CardImageBullet>
        </CardImageInfoTop>
        <CardImageInfoBottom>
          <CardImageTitle>{name}</CardImageTitle>
        </CardImageInfoBottom>
      </CardImageInfo>
    </CardImageContainer>
  );
};

export default CardImage;

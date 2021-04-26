import React from "react";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { addFavorites, removeFavorites } from "../../../store/recipies/slice";

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
  id: string;
}

const CardImage: React.FC<ICardImage> = ({
  isOpen,
  photoUrl,
  duration,
  servings,
  name,
  id,
}) => {
  const dispatch = useAppDispatch();
  const { userFavorites } = useAppSelector((state) => state.recipies);

  console.log(userFavorites);

  const isFavorite = userFavorites.some((recipie) => recipie._id === id);

  const addRemoveFavoritesHandler = () => {
    if (!isFavorite) {
      dispatch(addFavorites(id));
    } else {
      dispatch(removeFavorites(id));
    }
  };

  return (
    <CardImageContainer isOpen={isOpen}>
      <CardImg src={photoUrl} />
      <CardImageInfo>
        <CardImageFav>
          <HeartSvg
            clickHandler={addRemoveFavoritesHandler}
            isFavorite={isFavorite}
          />
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

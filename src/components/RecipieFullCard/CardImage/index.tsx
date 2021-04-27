import React, { useState, useEffect } from "react";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { addFavorites, removeFavorites } from "../../../store/recipies/slice";

import HeartSvg from "../../HeartSvg";
import Tooltip from "../../Tooltip";

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
  const { isLogged } = useAppSelector((state) => state.user);
  const [showTooltip, setShowTooltip] = useState(false);

  const isFavorite = userFavorites.some((recipie) => recipie._id === id);

  const addRemoveFavoritesHandler = () => {
    if (!isFavorite) {
      dispatch(addFavorites(id));
    } else {
      dispatch(removeFavorites(id));
    }
  };

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
    <CardImageContainer isOpen={isOpen}>
      <CardImg src={photoUrl} />
      <CardImageInfo>
        <CardImageFav>
          <HeartSvg
            clickHandler={addRemoveFavoritesHandler}
            isFavorite={isFavorite}
          />
          {!isLogged && (
            <Tooltip show={showTooltip} text="Login to add to favorites" />
          )}
          {!isFavorite && isLogged && (
            <Tooltip show={showTooltip} text="Add to favorites" />
          )}
          {isFavorite && isLogged && (
            <Tooltip show={showTooltip} text="Remove from favorites" />
          )}
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

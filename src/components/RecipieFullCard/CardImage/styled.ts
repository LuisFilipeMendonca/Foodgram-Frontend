import styled from "styled-components";
import { TooltipContainer } from "../../Tooltip/styled";

type CardOpenType = {
  isOpen: boolean;
};

export const CardImageContainer = styled.div<CardOpenType>`
  height: 250px;
  width: 100%;
  position: relative;

  @media screen and (min-width: 576px) {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    z-index: 20;
    height: 400px;
    width: 400px;
    transform: ${({ isOpen }) => (isOpen ? "translateX(-50%)" : null)};
    transition: transform 0.2s ease;
    box-shadow: 0 0 10px #888;
  }

  @media screen and (min-width: 992px) {
    width: 450px;
  }
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardImageInfo = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    transparent 50%,
    rgba(0, 0, 0, 0.8)
  );
`;

export const CardImageInfoTop = styled.div``;

export const CardImageInfoBottom = styled.div``;

export const CardImageBullet = styled.span`
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: yellow;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDark};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CardImageBulletDescription = styled.span`
  font-size: 1rem;
  transform: translateY(-2px);
`;

export const CardImageTitle = styled.h2`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const CardImageFav = styled.span`
  position: absolute;
  right: 0;
  top: 16px;

  &:hover ${TooltipContainer} {
    display: block;
    right: 0;
    transform: translateY(calc(-100% - 16px));
    width: 14rem;
  }

  &:hover ${TooltipContainer}::before {
    left: unset;
    right: 14px;
  }
`;

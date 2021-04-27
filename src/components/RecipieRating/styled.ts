import styled from "styled-components";
import { TooltipContainer } from "../Tooltip/styled";

type StarType = {
  isFilled?: boolean;
  isLoading?: boolean;
};

export const CardStarPolygon = styled.polygon<StarType>`
  fill: ${({ isFilled }) => (isFilled ? "#ffd055" : "#ddd")};
`;

export const CardStar = styled.svg`
  height: 21px;
  width: 19px;

  &:focus ${CardStarPolygon} {
    filter: ${({ theme }) => `drop-shadow(0 0 2px ${theme.colors.magenta})`};
  }

  @media screen and (min-width: 500px) {
    height: 23px;
    width: 21px;
  }
`;

export const CardStarsContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StarsContent = styled.div<StarType>`
  display: inline-block;

  cursor: pointer;
  pointer-events: ${({ isLoading }) => isLoading && "none"};
  position: relative;

  &:hover + ${TooltipContainer} {
    display: block;
  }

  &:hover ${CardStar} ${CardStarPolygon} {
    fill: #ffd055;
  }

  & ${CardStar}:hover ~ ${CardStar} ${CardStarPolygon} {
    fill: #ddd;
  }
`;

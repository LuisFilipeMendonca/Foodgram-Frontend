import styled from "styled-components";

type StarType = {
  isFilled?: boolean;
  isLoading?: boolean;
};

export const CardStarPolygon = styled.polygon<StarType>`
  fill: ${({ isFilled }) => (isFilled ? "#ffd055" : "#ddd")};
`;

export const CardStar = styled.svg`
  height: 25px;
  width: 23px;

  &:focus ${CardStarPolygon} {
    filter: ${({ theme }) => `drop-shadow(0 0 2px ${theme.colors.magenta})`};
  }
`;

export const CardStarsContainer = styled.div<StarType>`
  display: inline-flex;
  cursor: pointer;
  pointer-events: ${({ isLoading }) => isLoading && "none"};

  &:hover ${CardStar} ${CardStarPolygon} {
    fill: #ffd055;
  }

  & ${CardStar}:hover ~ ${CardStar} ${CardStarPolygon} {
    fill: #ddd;
  }
`;

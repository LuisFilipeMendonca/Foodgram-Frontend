import styled from "styled-components";

type StarType = {
  isFilled?: boolean;
  isLoading?: boolean;
};

type ShowTooltip = {
  show: boolean;
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

export const Tooltip = styled.div<ShowTooltip>`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.colors.magenta};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 0.9rem;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.colors.magentaOpacity};
  display: ${({ show }) => (show ? "block" : "none")};
  pointer-events: none;
  transform: translateY(calc(-100% - 8px));

  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 6px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.magenta};
  }

  @media screen and (min-width: 450px) {
    padding: 4px 16px;
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

  &:hover + ${Tooltip} {
    display: block;
  }

  &:hover ${CardStar} ${CardStarPolygon} {
    fill: #ffd055;
  }

  & ${CardStar}:hover ~ ${CardStar} ${CardStarPolygon} {
    fill: #ddd;
  }
`;

import styled from "styled-components";

type StarType = {
  isFilled: boolean;
};

export const CardContainer = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  background: #f5f5f5;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 5px #aaa;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  display: block;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.1rem;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardInformation = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

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

export const CardStarsContainer = styled.div`
  display: inline-flex;
  cursor: pointer;

  &:hover ${CardStar} ${CardStarPolygon} {
    fill: #ffd055;
  }

  & ${CardStar}:hover ~ ${CardStar} ${CardStarPolygon} {
    fill: #ddd;
  }
`;

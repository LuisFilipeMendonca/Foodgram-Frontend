import styled from "styled-components";

export const CardContainer = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  background: #f5f5f5;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 20px #aaa;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 275px;
  object-fit: cover;
  display: block;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 8px;
`;

export const CardInformation = styled.div`
  padding: 8px;
`;

export const CardStarPolygon = styled.polygon`
  fill: ${({ theme }) => theme.colors.textMedium};
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
    fill: ${({ theme }) => theme.colors.textMedium};
  }
`;

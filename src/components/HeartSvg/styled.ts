import styled from "styled-components";

type HeartFilledType = {
  isFilled: boolean;
};

export const CardHeart = styled.svg<HeartFilledType>`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  height: 15px;
  width: 15px;
  fill: ${({ isFilled }) => (isFilled ? "red" : "transparent")};
  position: absolute;
  right: 16px;
  overflow: visible;
  animation: pulse 1s infinite;
  cursor: pointer;
`;

export const CardHeartPath = styled.path`
  stroke: ${({ theme }) => theme.colors.magenta};
  stroke-width: 4px;
`;

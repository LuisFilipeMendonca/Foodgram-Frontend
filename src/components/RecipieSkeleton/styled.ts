import styled from "styled-components";

export const RecipieSkeletonContainer = styled.div`
  @keyframes loading {
    0% {
      left: -40%;
    }

    100% {
      left: 140%;
    }
  }

  border: 2px solid ${({ theme }) => theme.colors.magentaOpacity};
  border-radius: 3px;
  box-shadow: 0 0 5px #aaa;
  background: #f5f5f5;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 15px;
    background-color: ${({ theme }) => theme.colors.magentaOpacity};
    filter: blur(60px);
    animation: loading 2s ease infinite;
  }
`;

export const SkeletonImg = styled.div`
  height: 175px;
  width: 100%;
  background: #e8e8e8;
`;

export const SkeletonInformation = styled.div`
  padding: 8px;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SkeletonBox = styled.div`
  height: 30px;
  background: #e8e8e8;
`;

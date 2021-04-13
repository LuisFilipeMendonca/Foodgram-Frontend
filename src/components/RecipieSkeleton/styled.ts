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
  display: flex;
  height: ${({ theme }) => theme.dimensions.recipies.heightSmall};

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 15px;
    background-color: ${({ theme }) => theme.colors.magentaOpacity};
    filter: blur(50px);
    animation: loading 2s ease infinite;
  }

  @media screen and (min-width: 400px) {
    flex-direction: column;
    height: unset;
  }
`;

export const SkeletonImg = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.dimensions.recipies.imgWidthSmall};
  background: #e8e8e8;

  @media screen and (min-width: 400px) {
    width: 100%;
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightSmall};
  }

  @media screen and (min-width: 500px) {
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightBig};
  }
`;

export const SkeletonInformation = styled.div`
  padding: 8px;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SkeletonBox = styled.div`
  height: 30px;
  background: #e8e8e8;
`;

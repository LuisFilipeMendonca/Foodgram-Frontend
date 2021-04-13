import styled from "styled-components";

export const CardContainer = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  background: #f5f5f5;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 5px #aaa;
  display: flex;
  height: ${({ theme }) => theme.dimensions.recipies.heightSmall};

  @media screen and (min-width: 400px) {
    flex-direction: column;
    height: unset;
  }

  @media screen and (min-width: 500px) {
    height: unset;
  }
`;

export const CardImg = styled.img`
  width: ${({ theme }) => theme.dimensions.recipies.imgWidthSmall};
  height: 100%;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 400px) {
    width: 100%;
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightSmall};
  }

  @media screen and (min-width: 500px) {
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightBig};
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.9rem;
  font-weight: 800;

  @media screen and (min-width: 400px) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (min-width: 500px) {
    font-size: 1rem;
  }
`;

export const CardInformation = styled.div`
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 500px) {
    padding: 8px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

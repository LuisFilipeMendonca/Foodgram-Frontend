import styled from "styled-components";

export const CardContainer = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  background: #f5f5f5;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 5px #aaa;
  display: flex;
  height: 130px;

  @media screen and (min-width: 450px) {
    flex-direction: column;
    height: unset;
  }
`;

export const CardImg = styled.img`
  width: ${({ theme }) => theme.dimensions.recipies.imgWidthSmall};
  height: 100%;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 450px) {
    width: 100%;
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightSmall};
  }

  @media screen and (min-width: 768px) {
    height: ${({ theme }) => theme.dimensions.recipies.imgHeightBig};
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.3rem;
  font-weight: 800;

  @media screen and (min-width: 450px) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CardInformation = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 450px) {
    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

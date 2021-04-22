import styled from "styled-components";

export const CardIngredientsContainer = styled.ul``;

export const CardIngredient = styled.li`
  color: ${({ theme }) => theme.colors.textMedium};
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const CardIngredientDescription = styled.p`
  margin-left: 1rem;
`;

export const CardIngredientBullet = styled.span`
  font-size: 0.5rem;
`;

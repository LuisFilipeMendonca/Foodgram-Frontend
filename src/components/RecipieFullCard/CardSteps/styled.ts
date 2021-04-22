import styled from "styled-components";

export const CardPreparationSteps = styled.ul``;

export const CardPreparationStep = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const CardStep = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const CardStepDescription = styled.p`
  padding: 8px 0 8px 16px;
  border-left: 4px solid ${({ theme }) => theme.colors.textMedium};
  color: ${({ theme }) => theme.colors.textMedium};
`;

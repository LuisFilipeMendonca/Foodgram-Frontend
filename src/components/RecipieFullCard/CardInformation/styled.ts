import styled from "styled-components";

export const RecipieInformationContainer = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const RecipieInformationTitle = styled.h3`
  font-size: 1.7rem;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const RecipieInformationDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMedium};
`;

export const RecipieInformationLabel = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;

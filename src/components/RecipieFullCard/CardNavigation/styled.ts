import styled from "styled-components";

type CardNavigationType = {
  isSelected: boolean;
};

export const CardNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardNavigationItem = styled.button<CardNavigationType>`
  flex: 1;
  padding: 1rem 0;
  border-top: 4px solid;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.textDark}` : `${theme.colors.textMedium}`};
  border-color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.magenta}` : "transparent"};

  &:focus {
    outline: 1px dashed blue;
  }
`;

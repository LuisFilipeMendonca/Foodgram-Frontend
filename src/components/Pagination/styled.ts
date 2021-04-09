import styled from "styled-components";

type PaginationItemType = {
  hasFullBorder?: boolean;
  hasFixedWidth?: boolean;
  hasBorderRadius?: boolean;
  isSelected?: boolean;
};

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const PaginationItem = styled.button<PaginationItemType>`
  padding: ${({ hasFixedWidth }) => (hasFixedWidth ? "8px 0" : "8px 24px")};
  width: ${({ hasFixedWidth }) => hasFixedWidth && "40px"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ hasFullBorder, theme }) =>
    hasFullBorder && `1px solid ${theme.colors.magenta}`};
  border-radius: ${({ hasBorderRadius }) => hasBorderRadius && "3px"};
  color: ${({ theme, isSelected }) =>
    isSelected ? "#f5f5f5" : theme.colors.magenta};
  background-color: ${({ hasFullBorder, isSelected, theme }) =>
    hasFullBorder && !isSelected
      ? "#f5f5f5"
      : isSelected
      ? `${theme.colors.magentaOpacity}`
      : null};

  &:disabled {
    background-color: #e0e0e0;
  }
`;

export const PaginationMenu = styled.ul`
  display: flex;
  margin: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.magenta};
  border-radius: 3px;
  background-color: #f5f5f5;
  overflow: hidden;

  & ${PaginationItem} {
    border-right: 1px solid ${({ theme }) => theme.colors.magenta};
  }

  & > *:last-child ${PaginationItem} {
    border-right: none;
  }
`;

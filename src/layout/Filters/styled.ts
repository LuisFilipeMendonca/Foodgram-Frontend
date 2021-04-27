import styled from "styled-components";
import {
  Input,
  InputBorder,
  InputContainer,
} from "../../components/Inputs/styled";

type FiltersType = {
  isOpen: boolean;
};

export const FiltersContainer = styled.section<FiltersType>`
  position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  width: 100%;
  pointer-events: none;
  z-index: 10;

  & ${Input} {
    background-color: #f5f5f5;
    border: 1px solid ${({ theme }) => theme.colors.magenta};
  }

  & ${InputBorder} {
    border: none;
  }

  & ${Input}:focus + ${InputBorder}::before {
    border-left: none;
    border-top: none;
  }

  & ${Input}:focus + ${InputBorder}::after {
    border-right: none;
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    width: ${({ theme }) => theme.dimensions.filtersWidth};
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
  }
`;

export const FiltersVisible = styled.div`
  padding: 0 16px;
  width: 100%;
  background-color: #deddce;
  height: ${({ theme }) => theme.dimensions.filtersHeightBig};
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.magenta};

  @media screen and (min-width: 576px) {
    padding: 0 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: ${({ theme }) => theme.dimensions.filtersHeightSmall};

    & ${InputContainer} {
      width: 60%;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    height: unset;

    & ${InputContainer} {
      width: 100%;
    }
  }
`;

export const FiltersCta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media screen and (min-width: 576px) {
    margin-top: 0;
    flex: 1;
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    margin-left: 0;

    & :nth-child(2) {
      display: none;
    }
  }
`;

export const FiltersMenu = styled.ul<FiltersType>`
  width: ${({ theme }) => theme.dimensions.filtersWidth};
  padding: 8px;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: left 0.2s ease;
  display: flex;
  flex-direction: column;
  background-color: #deddce;
  height: 100%;
  pointer-events: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.magentaOpacity};

  @media screen and (min-width: 768px) {
    position: static;
    width: 100%;
    border-right: none;
  }
`;

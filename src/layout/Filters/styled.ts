import styled from "styled-components";
import { Input, InputBorder } from "../../components/Inputs/styled";

type FiltersType = {
  isOpen: boolean;
};

export const FiltersContainer = styled.section<FiltersType>`
  position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  width: 100%;
  pointer-events: none;

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

  .filters__visible {
    padding: 0 16px;
    width: 100%;
    background-color: #deddce;
    height: ${({ theme }) => theme.dimensions.filtersHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.magenta};
  }

  .filters__cta {
    display: flex;
    justify-content: space-between;
  }

  .filters__menu {
    width: 200px;
    padding: 8px;
    position: absolute;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: left 0.2s ease;
    display: flex;
    flex-direction: column;
    background-color: #deddce;
    height: 100%;
    pointer-events: auto;
  }

  .filters__options {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 250px;
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
    background-color: ${({ theme }) => theme.colors.magentaOpacity};

    .filters__menu {
      position: static;
      width: 100%;
    }
  }
`;

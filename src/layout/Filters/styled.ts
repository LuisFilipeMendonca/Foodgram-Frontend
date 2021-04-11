import styled from "styled-components";

type FiltersType = {
  isOpen: boolean;
};

export const FiltersContainer = styled.section<FiltersType>`
  position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
  height: 100%;
  width: 100%;
  pointer-events: none;

  input[type="text"] {
    width: 100%;
    margin-bottom: 8px;
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

  @media screen and (min-width: 850px) {
    position: fixed;
    width: 250px;
    border-right: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
    background-color: ${({ theme }) => theme.colors.magentaOpacity};

    .filters__menu {
      position: static;
      width: 100%;
    }
  }
`;

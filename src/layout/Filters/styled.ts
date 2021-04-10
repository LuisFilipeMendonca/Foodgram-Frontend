import styled from "styled-components";

type FiltersType = {
  isOpen: boolean;
};

export const FiltersContainer = styled.section<FiltersType>`
  position: fixed;
  height: 100%;
  width: 100%;

  input[type="text"] {
    width: 100%;
    margin-bottom: 8px;
  }

  .filters__visible {
    padding: 16px 8px;
    width: 100%;
    background-color: #deddce;
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
  }

  .filters__options {
    display: flex;
    flex-direction: column;
  }
`;

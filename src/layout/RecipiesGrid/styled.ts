import styled from "styled-components";

export const RecipiesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 0 8px;

  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  }
`;

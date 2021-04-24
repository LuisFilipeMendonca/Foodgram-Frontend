import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NotFoundTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.magenta};
`;

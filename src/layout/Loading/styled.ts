import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const LoadingTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.magenta};
`;

export const LoadingItemContainer = styled.div``;

export const LoadingItem = styled.span`
  @keyframes bounce {
    0% {
      transform: translateY(0);
      background-color: ${({ theme }) => theme.colors.magenta};
    }
    50% {
      transform: translateY(-1.5rem);
      background-color: ${({ theme }) => theme.colors.magentaOpacity};
    }
    100% {
      transform: translateY(0);
      background-color: ${({ theme }) => theme.colors.magenta};
    }
  }

  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.magenta};
  border-radius: 50%;
  animation: bounce 0.8s ease infinite;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

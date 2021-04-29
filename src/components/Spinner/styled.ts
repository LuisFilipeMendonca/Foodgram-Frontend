import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
`;

export const SpinnerItem = styled.span`
  @keyframes spin {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }

  @keyframes changeBackground {
    0% {
      background-color: ${({ theme }) => theme.colors.magenta};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.magentaOpacity};
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: rotate(45deg);
  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.072s;
  }

  &:nth-child(2) {
    animation-delay: -0.144s;
  }

  &:nth-child(3) {
    animation-delay: -0.216s;
  }

  &:nth-child(4) {
    animation-delay: -0.288s;
  }

  &:nth-child(5) {
    animation-delay: -0.36s;
  }

  &:nth-child(6) {
    animation-delay: -0.432s;
  }

  &:before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    animation: changeBackground 1.2s linear infinite;
  }
`;

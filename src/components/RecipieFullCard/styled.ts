import styled from "styled-components";

type CardOpenType = {
  isOpen: boolean;
};

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 450px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 375px;
  }

  @media screen and (min-width: 992px) {
    max-width: 450px;
  }
`;

export const CardDetailsContainer = styled.div<CardOpenType>`
  background-color: #f5f5f5;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: absolute;
    height: 110%;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: ${({ isOpen }) => (isOpen ? "translatex(50%)" : null)};
    transition: transform 0.2s ease;
  }
`;

export const CardDetails = styled.div<CardOpenType>`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardNavigationBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, #ccc, #eee);
`;

export const CardDetailsContent = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
`;

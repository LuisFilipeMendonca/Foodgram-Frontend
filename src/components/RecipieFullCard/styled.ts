import styled from "styled-components";

type CardImageType = {
  url: string;
  isOpen: boolean;
};

type CardDetailsType = {
  isOpen: boolean;
};

type CardNavigationType = {
  isSelected: boolean;
};

export const CardContainer = styled.article`
  display: flex;
  height: 400px;
  align-items: center;
  position: relative;
`;

export const CardImage = styled.div<CardImageType>`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 350px;
  height: 100%;
  z-index: 1;
  box-shadow: ${({ isOpen }) => (isOpen ? "0 0 30px #696969" : null)};
`;

export const CardDetailsContainer = styled.div<CardDetailsType>`
  height: 95%;
  background: #f5f5f5;
  width: ${(props) => (props.isOpen ? "400px" : "0px")};
  transition: width 0.5s ease;
  overflow: hidden;
  box-shadow: ${({ isOpen }) => (isOpen ? "0 0 20px #aaa" : null)};
`;

export const CardDetails = styled.div<CardDetailsType>`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardNavigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardNavigationItem = styled.button<CardNavigationType>`
  padding: 16px 32px;
  border-top: 4px solid;
  font-weight: bold;
  color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.textDark}` : `${theme.colors.textMedium}`};
  border-color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.magenta}` : "transparent"};
`;

export const CardNavigationBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, #ccc, #eee);
`;

export const CardDetailsContent = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px 40px;
`;

export const CardIngredients = styled.ul``;

export const CardIngredient = styled.li`
  color: ${({ theme }) => theme.colors.textMedium};
  display: flex;
  align-items: center;
  font-size: 0.5rem;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const CardIngredientDescription = styled.p`
  font-size: 1rem;
  margin-left: 8px;
`;

export const CardPreparationSteps = styled.ul``;

export const CardPreparationStep = styled.li`
  margin-bottom: 16px;
`;

export const CardStep = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 4px;
`;

export const CardStepDescription = styled.p`
  padding: 8px 0 8px 16px;
  border-left: 4px solid ${({ theme }) => theme.colors.textMedium};
  color: ${({ theme }) => theme.colors.textMedium};
`;

export const CardToggler = styled.span<CardDetailsType>`
  @keyframes pulseFade {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }

  position: absolute;
  top: 50%;
  right: 0;
  font-size: 16px;
  width: 25px;
  height: 25px;
  background: ${(props) => props.theme.colors.magenta};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: ${(props) =>
    props.isOpen
      ? "translate(50%, -50%) rotate(180deg)"
      : "translate(50%, -50%)"};
  transition: transform 0.5s ease;
  z-index: 2;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.magenta};
    border-radius: 50%;
    z-index: -1;
    animation: pulseFade 1s infinite;
  }
`;

export const CardInformation = styled.div<CardDetailsType>`
  position: relative;
  transition: opacity 1s ease;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  background: ${({ isOpen }) =>
    isOpen
      ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, transparent 40%, rgba(0, 0, 0, 0.7))"
      : "transparent"};
`;

export const CardInformationTop = styled.div<CardDetailsType>`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 1s ease;
`;

export const CardInformationBullet = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 65px;
  height: 65px;
  background: ${({ theme }) => theme.colors.yellowOpacity};
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const CardInformationValue = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const CardInformationDescription = styled.span`
  font-size: 0.6rem;
  margin-top: -4px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CardInformationBottom = styled.div<CardDetailsType>`
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(20px)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: 1s ease;
  transition-property: transform, opacity;
`;

export const CardInformationTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 2rem;
  margin-bottom: 8px;
`;

export const CardInformationText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

import styled from "styled-components";

type ShowTooltip = {
  show: boolean;
};

export const TooltipContainer = styled.div<ShowTooltip>`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.colors.magenta};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 1.1rem;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.colors.magentaOpacity};
  display: ${({ show }) => (show ? "block" : "none")};
  pointer-events: none;
  transform: translateY(calc(-100% - 8px));
  width: 10rem;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 6px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.magenta};
  }

  @media screen and (min-width: 450px) {
    padding: 4px 16px;
  }
`;

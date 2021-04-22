import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const BaseButton = css`
  padding: 0.6rem 1.3rem;
  border: 1px solid;
  border-radius: 3px;
  transition: all 0.2s ease;
  backface-visibility: hidden;
  transform: translateZ(0);
  display: inline-block;

  &:hover {
    transform: translate(0, -2px);
  }

  &.primary {
    border-color: ${({ theme }) => theme.colors.magenta};
    color: ${({ theme }) => theme.colors.textLight};
    background-color: ${({ theme }) => theme.colors.magentaOpacity};
  }

  &:hover.primary {
    color: ${({ theme }) => theme.colors.textLight};
    background-color: ${({ theme }) => theme.colors.magenta};
  }

  &.secondary {
    border-color: ${({ theme }) => theme.colors.textMedium};
    color: ${({ theme }) => theme.colors.textMedium};
    background-color: ${({ theme }) => theme.colors.textLight};
  }

  &:hover.secondary {
    color: ${({ theme }) => theme.colors.textLight};
    background-color: ${({ theme }) => theme.colors.textMedium};
  }
`;

export const Button = styled.button`
  ${BaseButton};
`;

export const LinkButton = styled(Link)`
  ${BaseButton}
`;

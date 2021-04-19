import styled from "styled-components";
import { Input, InputBorder } from "../../components/Inputs/styled";

export const CtaContainer = styled.section`
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.magenta};

  & ${Input} {
    background-color: #f5f5f5;
    border: 1px solid ${({ theme }) => theme.colors.magenta};
  }

  & ${InputBorder} {
    border: none;
  }

  & ${Input}:focus + ${InputBorder}::before {
    border-left: none;
    border-top: none;
  }

  & ${Input}:focus + ${InputBorder}::after {
    border-right: none;
    border-bottom: none;
  }

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  & :nth-child(3) {
    align-self: flex-start;
  }

  @media screen and (min-width: 450px) {
    flex-direction: row;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 0;
    }

    & :nth-child(3) {
      align-self: auto;
      margin-right: 16px;
    }

    & :nth-child(1) {
      order: 1;
    }

    & :nth-child(2) {
      flex: 1;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px 64px;

    & :nth-child(2) {
      margin-right: 16px;
    }

    & :nth-child(3) {
      align-self: auto;
      margin-right: 64px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 16px 128px;
  }

  @media screen and (min-width: 1200px) {
    padding: 16px 256px;
  }
`;

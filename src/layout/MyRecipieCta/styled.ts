import styled from "styled-components";
import {
  Input,
  InputBorder,
  InputContainer,
} from "../../components/Inputs/styled";

export const CtaContainer = styled.section`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.magenta};

  & ${InputContainer} {
    width: 100%;
  }

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

  @media screen and (min-width: 576px) {
    flex-wrap: nowrap;
    padding: 12px 32px;

    & ${InputContainer} {
      width: unset;
      flex: 1;
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 12px 128px;
  }

  @media screen and (min-width: 992px) {
    padding: 12px 256px;
  }
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    margin-top: 0;
    flex: unset;

    & > *:not(:last-child) {
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    & > *:not(:last-child) {
      margin-right: 48px;
    }
  }
`;

import styled from "styled-components";

export const SectionForm = styled.section`
  width: 100%;
  max-width: 500px;
`;

export const FormHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.magenta};
  padding: 16px;
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Form = styled.form`
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.magenta};

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;
export const InputsContainer = styled.div`
  padding: 0 16px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const InputContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const InputLabel = styled.label`
  display: block;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputBorder = styled.span`
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-color: red;
    transition: 0.5s ease;
    transition-property: width, height, border-radius;
  }

  &:before {
    top: -1px;
    left: -1px;
  }

  &:after {
    bottom: -1px;
    right: -1px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: 8px;

  &:focus + ${InputBorder}::before, &:focus + ${InputBorder}::after {
    width: 100%;
    height: 100%;
  }

  &:focus + ${InputBorder}::before {
    border-left: 2px solid ${({ theme }) => theme.colors.magenta};
    border-top: 2px solid ${({ theme }) => theme.colors.magenta};
  }

  &:focus + ${InputBorder}::after {
    border-right: 2px solid ${({ theme }) => theme.colors.magenta};
    border-bottom: 2px solid ${({ theme }) => theme.colors.magenta};
  }
`;

export const InputInfo = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMedium};
`;

export const InputError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export const FormActions = styled.div`
  padding: 0 16px 16px;
`;

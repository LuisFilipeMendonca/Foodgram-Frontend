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

export const FormContainer = styled.form`
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.magenta};

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const FormActions = styled.div`
  padding: 0 16px 16px;
`;

export const InputsContainer = styled.div`
  padding: 0 16px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

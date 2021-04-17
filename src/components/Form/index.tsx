import React from "react";

import { IFormProps } from "../../interfaces/Forms";

import {
  SectionForm,
  FormHeader,
  FormTitle,
  FormActions,
  InputsContainer,
  FormContainer,
} from "./styled";

const Form: React.FC<IFormProps> = ({
  children,
  title,
  submitHandler,
  additionalBtn,
  submitDescription,
}) => {
  return (
    <SectionForm>
      <FormContainer onSubmit={submitHandler}>
        <FormHeader>
          <FormTitle>{title}</FormTitle>
        </FormHeader>
        <InputsContainer>{children}</InputsContainer>
        <FormActions>
          <button type="submit">{submitDescription}</button>
          {additionalBtn && additionalBtn}
        </FormActions>
      </FormContainer>
    </SectionForm>
  );
};

export default Form;

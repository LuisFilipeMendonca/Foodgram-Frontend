import React from "react";

import { IFormProps } from "../../interfaces/Forms";

import {
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
  );
};

export default Form;

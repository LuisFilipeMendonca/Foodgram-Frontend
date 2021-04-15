import React from "react";

import {
  FormHeader,
  FormTitle,
  FormActions,
  InputsContainer,
  FormContainer,
} from "./styled";

interface IForm {
  title: string;
  submitHandler: (e: React.FormEvent) => void;
  submitDescription: string;
  additionalBtn?: JSX.Element;
}

const Form: React.FC<IForm> = ({
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

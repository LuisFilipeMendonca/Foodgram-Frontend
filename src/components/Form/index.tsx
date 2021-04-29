import React, { useEffect } from "react";

import { IFormProps } from "../../interfaces/Forms";

import BaseButton from "../BaseButton";
import Spinner from "../Spinner";

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
  isLoading,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <SectionForm>
      <FormContainer onSubmit={submitHandler}>
        <FormHeader>
          <FormTitle>{title}</FormTitle>
        </FormHeader>
        <InputsContainer>{children}</InputsContainer>
        <FormActions>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <BaseButton
                role="button"
                className="primary"
                clickHandler={submitHandler}
                type="submit"
              >
                {submitDescription}
              </BaseButton>
              {additionalBtn && additionalBtn}
            </>
          )}
        </FormActions>
      </FormContainer>
    </SectionForm>
  );
};

export default Form;

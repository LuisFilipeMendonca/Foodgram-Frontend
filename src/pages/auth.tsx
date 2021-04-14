import React from "react";

import { MainContainerAuth } from "../styles";
import {
  SectionForm,
  Form,
  FormHeader,
  FormTitle,
  InputsContainer,
  InputContainer,
  InputLabel,
  InputWrapper,
  Input,
  InputBorder,
  InputInfo,
  InputError,
  FormActions,
} from "./styled";

const AuthPage: React.FC = () => {
  return (
    <MainContainerAuth>
      <SectionForm>
        <Form>
          <FormHeader>
            <FormTitle>Login</FormTitle>
          </FormHeader>
          <InputsContainer>
            <InputContainer>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputWrapper>
                <Input type="text" />
                <InputBorder />
              </InputWrapper>
              <InputInfo>Info about the input</InputInfo>
              <InputError>Info about the error message</InputError>
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputWrapper>
                <Input type="text" />
                <InputBorder />
              </InputWrapper>
              <InputInfo>Info about the input</InputInfo>
              <InputError>Info about the error message</InputError>
            </InputContainer>
          </InputsContainer>
          <FormActions>
            <button>Login</button>
          </FormActions>
        </Form>
      </SectionForm>
    </MainContainerAuth>
  );
};

export default AuthPage;

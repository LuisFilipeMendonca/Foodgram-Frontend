import React, { useState } from "react";

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

import { loginInputs, registerInputs } from "../constants/inputs";

import useInputs from "../hooks/useInputs";

const AuthPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);

  const { inputs, changeHandler } = useInputs(loginInputs);
  const { inputs: registerInpu, changeHandler: registerChange } = useInputs(
    registerInputs
  );

  const loginInputsElem = inputs.map((input) => (
    <InputContainer key={input.id}>
      <InputLabel htmlFor={input.id}>{input.label}</InputLabel>
      <InputWrapper>
        <Input
          type="text"
          id={input.id}
          placeholder={input.placeholder}
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e)
          }
        />
        <InputBorder />
      </InputWrapper>
      <InputInfo>Info about the input</InputInfo>
      <InputError>Info about the error message</InputError>
    </InputContainer>
  ));

  const registerInputsElem = registerInpu.map((input) => (
    <InputContainer key={input.id}>
      <InputLabel htmlFor={input.id}>{input.label}</InputLabel>
      <InputWrapper>
        <Input
          type="text"
          id={input.id}
          placeholder={input.placeholder}
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            registerChange(e)
          }
        />
        <InputBorder />
      </InputWrapper>
      <InputInfo>Info about the input</InputInfo>
      <InputError>Info about the error message</InputError>
    </InputContainer>
  ));

  const changeAuthHandler = () => setIsLogging(!isLogging);

  return (
    <MainContainerAuth>
      <SectionForm>
        <Form>
          <FormHeader>
            <FormTitle>Login</FormTitle>
          </FormHeader>
          <InputsContainer>
            {isLogging ? loginInputsElem : registerInputsElem}
          </InputsContainer>
          <FormActions>
            <button>Login</button>
            <button type="button" onClick={changeAuthHandler}>
              Change to Register
            </button>
          </FormActions>
        </Form>
      </SectionForm>
    </MainContainerAuth>
  );
};

export default AuthPage;

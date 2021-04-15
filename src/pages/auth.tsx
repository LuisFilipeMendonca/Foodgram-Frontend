import React, { useState } from "react";

import { MainContainerAuth } from "../styles";
import { SectionForm } from "./styled";

import { loginInputs } from "../constants/inputs";

import useInputs from "../hooks/useInputs";

import Form from "../components/Form";
import Input from "../components/Inputs";

const AuthPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);

  const { inputs, changeHandler } = useInputs(loginInputs);

  const loginInputsElem = inputs.map(
    ({
      label,
      value,
      errorMsg,
      isInvalid,
      placeholder,
      type,
      info,
      name,
      qtty,
    }) => {
      return (
        <Input
          key={name}
          label={label}
          value={value}
          errorMsg={errorMsg}
          isInvalid={isInvalid}
          placeholder={placeholder}
          type={type}
          info={info}
          name={name}
          qtty={qtty}
          changeHandler={changeHandler}
        />
      );
    }
  );

  const changeAuthHandler = () => setIsLogging(!isLogging);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ola");
  };

  const additionalBtn = (
    <button type="button" onClick={changeAuthHandler}>
      Change to register
    </button>
  );

  return (
    <MainContainerAuth>
      <SectionForm>
        <Form
          submitHandler={submitHandler}
          title="Login"
          submitDescription="login"
          additionalBtn={additionalBtn}
        >
          {loginInputsElem}
        </Form>
      </SectionForm>
    </MainContainerAuth>
  );
};

export default AuthPage;

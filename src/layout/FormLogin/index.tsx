import React from "react";

import { IFormAuthProps } from "../../interfaces/Forms";

import { loginInputs } from "../../constants/inputs";

import useInputs from "../../hooks/useInputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";

const FormLogin: React.FC<IFormAuthProps> = ({ changeAuthHandler }) => {
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
    <Form
      submitHandler={submitHandler}
      title="Login"
      submitDescription="login"
      additionalBtn={additionalBtn}
    >
      {loginInputsElem}
    </Form>
  );
};

export default FormLogin;

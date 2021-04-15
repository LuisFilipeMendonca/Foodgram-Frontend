import React from "react";

import { IFormAuthProps } from "../../interfaces/Forms";

import { registerInputs } from "../../constants/inputs";

import useInputs from "../../hooks/useInputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";

import FormHelper from "../../helpers/Form";

const FormRegister: React.FC<IFormAuthProps> = ({ changeAuthHandler }) => {
  const { inputs, changeHandler } = useInputs(registerInputs);

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

    const form = new FormHelper(inputs);

    const { isFormValid, validatedInputs } = form.formValidate();

    console.log(isFormValid);
    console.log(validatedInputs);
  };

  const additionalBtn = (
    <button type="button" onClick={changeAuthHandler}>
      Change to login
    </button>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Register"
      submitDescription="Register"
      additionalBtn={additionalBtn}
    >
      {loginInputsElem}
    </Form>
  );
};

export default FormRegister;

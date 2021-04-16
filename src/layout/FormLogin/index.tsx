import React from "react";

import { IFormAuthProps } from "../../interfaces/Forms";

import { loginInputs } from "../../constants/inputs";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { login } from "../../store/user/slice";

import Form from "../../components/Form";
import Input from "../../components/Inputs";

import FormHelper from "../../helpers/Form";

const FormLogin: React.FC<IFormAuthProps> = ({ changeAuthHandler }) => {
  const dispatch = useAppDispatch();
  const { inputs, changeHandler, setHandler, focusHandler } = useInputs(
    loginInputs
  );

  const inputElems = inputs.map(
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
          focusHandler={focusHandler}
        />
      );
    }
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    const { isFormValid, validatedInputs } = form.formValidate();

    if (!isFormValid) {
      setHandler(validatedInputs);
      return;
    }

    const formData = form.buildFormObj();

    dispatch(login(formData));
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
      {inputElems}
    </Form>
  );
};

export default FormLogin;

import React from "react";
import { Link } from "react-router-dom";

import { IFormAuthProps } from "../../interfaces/Forms";

import { loginInputs } from "../../constants/inputs";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { login } from "../../store/user/slice";

import Form from "../../components/Form";
import Input from "../../components/Inputs";
import BaseButton from "../../components/BaseButton";

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
    <BaseButton
      type="button"
      clickHandler={changeAuthHandler}
      role="button"
      className="secondary"
    >
      Change to register
    </BaseButton>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Login"
      submitDescription="login"
      additionalBtn={additionalBtn}
    >
      {inputElems}
      <Link to="forgot_password">Forgot your password?</Link>
    </Form>
  );
};

export default FormLogin;

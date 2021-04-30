import React from "react";
import { useHistory } from "react-router";

import { emailInput } from "../../constants/inputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";
import BaseButton from "../../components/BaseButton";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import FormHelper from "../../helpers/Form";
import { forgotPassword } from "../../store/user/slice";

const FormForgotPassword: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { inputs, changeHandler, setHandler, focusHandler } = useInputs(
    emailInput
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

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    const { isFormValid, validatedInputs } = form.formValidate();

    if (!isFormValid) {
      setHandler(validatedInputs);
      return;
    }

    const formData = form.buildFormObj();

    try {
      await dispatch(forgotPassword(formData));
      history.replace("/login");
    } catch (e) {}
  };

  const additionalBtn = (
    <BaseButton
      role="button"
      className="secondary"
      type="button"
      clickHandler={() => history.goBack()}
    >
      Cancel
    </BaseButton>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Password Forgotten"
      submitDescription="Reset password"
      additionalBtn={additionalBtn}
      isLoading={isLoading}
    >
      {inputElems}
    </Form>
  );
};

export default FormForgotPassword;

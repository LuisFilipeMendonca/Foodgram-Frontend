import React from "react";
import { useHistory, useParams } from "react-router";

import { passwordInput } from "../../constants/inputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import FormHelper from "../../helpers/Form";
import { resetPassword } from "../../store/user/slice";
import BaseButton from "../../components/BaseButton";

const FormForgotPassword: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.user);
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const dispatch = useAppDispatch();
  const { inputs, changeHandler, setHandler, focusHandler } = useInputs(
    passwordInput
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

    const formData = form.buildFormObj() as { password: string };

    try {
      await dispatch(resetPassword({ password: formData.password, token }));
      history.replace("/login");
    } catch (e) {}
  };

  const additionalBtn = (
    <BaseButton
      type="button"
      role="button"
      className="secondary"
      clickHandler={() => history.goBack()}
    >
      Cancel
    </BaseButton>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Reset Password"
      submitDescription="Reset Password"
      additionalBtn={additionalBtn}
      isLoading={isLoading}
    >
      {inputElems}
    </Form>
  );
};

export default FormForgotPassword;

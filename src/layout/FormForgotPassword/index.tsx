import React from "react";
import { useHistory } from "react-router";

import { emailInput } from "../../constants/inputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import FormHelper from "../../helpers/Form";

const FormForgotPassword: React.FC = () => {
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

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    const { isFormValid, validatedInputs } = form.formValidate();

    if (!isFormValid) {
      setHandler(validatedInputs);
      return;
    }

    const formData = form.buildFormObj();

    console.log(formData);

    //   dispatch(login(formData));
  };

  const additionalBtn = (
    <button type="button" onClick={() => history.goBack()}>
      Cancel
    </button>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Password Forgotten"
      submitDescription="reset password"
      additionalBtn={additionalBtn}
    >
      {inputElems}
    </Form>
  );
};

export default FormForgotPassword;

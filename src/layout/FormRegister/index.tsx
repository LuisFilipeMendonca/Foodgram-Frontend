import React from "react";

import { IFormAuthProps } from "../../interfaces/Forms";

import { registerInputs } from "../../constants/inputs";

import useInputs from "../../hooks/useInputs";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { register } from "../../store/user/slice";

import Form from "../../components/Form";
import Input from "../../components/Inputs";
import BaseButton from "../../components/BaseButton";

import FormHelper from "../../helpers/Form";

const FormRegister: React.FC<IFormAuthProps> = ({ changeAuthHandler }) => {
  const { isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { inputs, changeHandler, setHandler, focusHandler } = useInputs(
    registerInputs
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

    await dispatch(register(formData));
  };

  const additionalBtn = (
    <BaseButton
      type="button"
      role="button"
      className="secondary"
      clickHandler={changeAuthHandler}
    >
      Change to login
    </BaseButton>
  );

  return (
    <Form
      submitHandler={submitHandler}
      title="Register"
      submitDescription="Register"
      additionalBtn={additionalBtn}
      isLoading={isLoading}
    >
      {inputElems}
    </Form>
  );
};

export default FormRegister;

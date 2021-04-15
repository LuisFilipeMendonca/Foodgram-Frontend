import React from "react";

import InputNormal from "./InputNormal";
import InputGroup from "./InputGroup";

import { IInput } from "../../interfaces/Inputs";

const Input: React.FC<IInput> = ({
  errorMsg,
  label,
  name,
  type,
  placeholder,
  info,
  isInvalid,
  qtty,
  value,
  changeHandler,
  focusHandler,
}) => {
  if (type === "group") {
    return (
      <InputGroup
        label={label || ""}
        placeholder={placeholder}
        qtty={qtty || 2}
        name={name}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
      />
    );
  }

  return (
    <InputNormal
      label={label && label}
      name={name}
      placeholder={placeholder}
      errorMsg={errorMsg}
      isInvalid={isInvalid}
      type={type}
      info={info}
      value={value}
      changeHandler={changeHandler}
      focusHandler={focusHandler}
    />
  );
};

export default Input;

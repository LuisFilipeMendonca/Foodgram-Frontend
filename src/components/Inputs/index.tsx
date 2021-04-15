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
}) => {
  if (type === "group") {
    return (
      <InputGroup
        label={label || ""}
        placeholder={placeholder}
        qtty={qtty || 2}
        name={name}
        changeHandler={changeHandler}
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
    />
  );
};

export default Input;

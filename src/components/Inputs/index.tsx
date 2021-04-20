import React from "react";

import { InputContainer, InputLabel } from "./styled";

import InputNormal from "./InputNormal";
import InputGroup from "./InputGroup";
import Textarea from "./Textarea";

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
  optionsType,
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
        isInvalid={isInvalid}
        value={Array.isArray(value) ? value : []}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
        optionsType={optionsType || ""}
      />
    );
  }

  if (type === "textarea") {
    return (
      <InputContainer>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Textarea
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
      </InputContainer>
    );
  }

  return (
    <InputContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
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
    </InputContainer>
  );
};

export default Input;

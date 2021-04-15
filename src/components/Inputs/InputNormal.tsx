import React from "react";

import { IInputNormal } from "../../interfaces/Inputs";

import {
  InputContainer,
  InputLabel,
  InputWrapper,
  InputInfo,
  InputError,
  InputBorder,
  Input,
} from "./styled";

const InputNormal: React.FC<IInputNormal> = ({
  label,
  name,
  type,
  placeholder,
  info,
  isInvalid,
  errorMsg,
  value,
  changeHandler,
}) => {
  return (
    <InputContainer key={name}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <InputWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e)
          }
        />
        <InputBorder />
      </InputWrapper>
      {info && <InputInfo>Info about the input</InputInfo>}
      {isInvalid && <InputError>{errorMsg}</InputError>}
    </InputContainer>
  );
};

export default InputNormal;

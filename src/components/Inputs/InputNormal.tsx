import React from "react";

import { IInputNormal } from "../../interfaces/Inputs";

import {
  InputWrapper,
  InputInfo,
  InputError,
  InputBorder,
  Input,
} from "./styled";

const InputNormal: React.FC<IInputNormal> = ({
  name,
  type,
  placeholder,
  info,
  isInvalid,
  errorMsg,
  value,
  changeHandler,
  focusHandler,
}) => {
  return (
    <>
      <InputWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={typeof value === "string" ? value : ""}
          min={type === "number" ? 0 : undefined}
          onFocus={() => focusHandler(name)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e)
          }
        />
        <InputBorder isInvalid={isInvalid} />
      </InputWrapper>
      {info && <InputInfo>Info about the input</InputInfo>}
      {isInvalid && <InputError>{errorMsg}</InputError>}
    </>
  );
};

export default InputNormal;

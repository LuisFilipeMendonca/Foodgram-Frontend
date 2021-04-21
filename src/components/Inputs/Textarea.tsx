import React from "react";

import { IInputNormal } from "../../interfaces/Inputs";

import {
  InputWrapper,
  InputInfo,
  InputError,
  InputBorder,
  TextareaStyled,
} from "./styled";

const Textarea: React.FC<IInputNormal> = ({
  label,
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
        <TextareaStyled
          spellCheck={false}
          placeholder={placeholder}
          name={name}
          value={value}
          onFocus={() => focusHandler(name)}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
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

export default Textarea;

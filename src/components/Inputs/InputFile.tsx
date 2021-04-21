import React from "react";

import {
  InputContainer,
  InputFileDescription,
  InputFileLabel,
  FileInput,
  FilePreviewImg,
  InputWrapper,
  InputError,
  InputInfo,
} from "./styled";

import { IInputFile } from "../../interfaces/Inputs";

const InputFile: React.FC<IInputFile> = ({
  name,
  value,
  isInvalid,
  errorMsg,
  label,
  info,
  changeHandler,
}) => {
  return (
    <InputContainer>
      <InputFileDescription>{label}</InputFileDescription>
      <InputWrapper>
        <InputFileLabel htmlFor={name} isInvalid={isInvalid}>
          <FileInput
            type="file"
            id={name}
            name={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeHandler(e)
            }
          />
          {value && <FilePreviewImg src={value} />}
        </InputFileLabel>
      </InputWrapper>
      {info && <InputInfo>{info}</InputInfo>}
      {isInvalid && <InputError>{errorMsg}</InputError>}
    </InputContainer>
  );
};

export default InputFile;

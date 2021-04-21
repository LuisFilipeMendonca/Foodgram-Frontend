import { IInputDefinition } from "../interfaces/Inputs";

class Validator {
  isEmail = (
    input: IInputDefinition
  ): { isValid: boolean; errorMsg: string } => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { value } = input;
    let isValid = true;

    if (typeof value === "string") {
      isValid = emailRegex.test(value);
    }

    return { isValid, errorMsg: isValid ? "" : "Please enter a valid email" };
  };

  hasValue = (
    input: IInputDefinition
  ): { isValid: boolean; errorMsg: string } => {
    const { value } = input;
    let isValid = true;

    if (typeof value === "string") {
      isValid = value.trim().length > 0;
    } else if (Array.isArray(value)) {
      isValid = value.filter((value) => value.value).length > 0;
    }

    return {
      isValid,
      errorMsg: isValid ? "" : "Please provide a value to this field",
    };
  };

  hasMinLength = (
    input: IInputDefinition
  ): { isValid: boolean; errorMsg: string } => {
    const { value, minLength } = input;
    let isValid = true;

    if (typeof value === "string") {
      isValid = value.trim().length > (minLength || 6);
    }

    return {
      isValid,
      errorMsg: isValid
        ? ""
        : `This field requires at least ${minLength} characters`,
    };
  };

  isPositiveNumber = (
    input: IInputDefinition
  ): { isValid: boolean; errorMsg: string } => {
    const { value } = input;
    let isValid = true;

    if (typeof value === "string") {
      const parsedNumber = parseInt(value);
      isValid = parsedNumber >= 0 && !isNaN(parsedNumber);
    }

    return {
      isValid,
      errorMsg: isValid ? "" : "Please provide a valid positive number",
    };
  };

  isFileValid = (
    input: IInputDefinition
  ): { isValid: boolean; errorMsg: string } => {
    const { value, validFileTypes } = input;
    const { type } = value as File;
    let isValid = true;

    const hasValue = this.hasValue(input);

    if (!hasValue.isValid) {
      return hasValue;
    }

    if (validFileTypes && type) {
      isValid = validFileTypes.some((value) => value === type);
    }

    return {
      isValid,
      errorMsg: isValid ? "" : "That file type is not suported",
    };
  };
}

export default new Validator();

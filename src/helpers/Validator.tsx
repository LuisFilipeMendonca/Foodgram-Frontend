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
    } else {
      isValid = value.length > 0;
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
      console.log(parsedNumber);
      isValid = parsedNumber >= 0 && !isNaN(parsedNumber);
    }

    return {
      isValid,
      errorMsg: isValid ? "" : "Please provide a valid positive number",
    };
  };

  isFileValid = (
    input: HTMLInputElement,
    acceptedValues: string[]
  ): { isValid: boolean; errorMsg: string } => {
    const { files } = input;
    let isValid = true;

    if (files && files[0]) {
      const { type } = files[0];

      isValid = acceptedValues.some((value) => value === type);
    }

    return {
      isValid,
      errorMsg: isValid ? "" : "That file type is not suported",
    };
  };
}

export default new Validator();

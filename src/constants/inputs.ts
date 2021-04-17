import { IInputDefinition } from "../interfaces/Inputs";
import Validator from "../helpers/Validator";

export const emailInput: IInputDefinition[] = [
  {
    label: "Email",
    value: "",
    placeholder: "Enter your email",
    type: "text",
    name: "email",
    isInvalid: false,
    errorMsg: "",
    validator: Validator.isEmail,
  },
];

export const loginInputs: IInputDefinition[] = [
  ...emailInput,
  {
    label: "Password",
    value: "",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
    isInvalid: false,
    errorMsg: "",
    minLength: 6,
    validator: Validator.hasMinLength,
  },
];

export const registerInputs: IInputDefinition[] = [
  {
    name: "username",
    label: "Username",
    value: "",
    placeholder: "Enter your name",
    type: "text",
    isInvalid: false,
    errorMsg: "",
    validator: Validator.hasValue,
  },
  ...loginInputs,
];

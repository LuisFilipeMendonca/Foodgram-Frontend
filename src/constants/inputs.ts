import { IInputDefinition } from "../interfaces/Inputs";

export const loginInputs: IInputDefinition[] = [
  {
    label: "Email",
    value: "",
    placeholder: "Enter your email",
    type: "text",
    name: "email",
    isInvalid: false,
    errorMsg: "",
  },
  {
    label: "Password",
    value: "",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
    isInvalid: false,
    errorMsg: "",
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
  },
  ...loginInputs,
];

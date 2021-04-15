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
  {
    label: "Ingredients",
    value: [],
    placeholder: "Enter your ingredient",
    type: "group",
    name: "ingredients",
    isInvalid: false,
    errorMsg: "",
    qtty: 5,
    values: [],
  },
];

// export const registerInputs: Input[] = [
//   {
//     name: 'username',
//     label: "Username",
//     value: "",
//     placeholder: "Enter your name",
//     type: "text",
//   },
//   ...loginInputs,
// ];

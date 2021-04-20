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

export const passwordInput: IInputDefinition[] = [
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

export const loginInputs: IInputDefinition[] = [
  ...emailInput,
  ...passwordInput,
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

export const findRecipieInput: IInputDefinition = {
  name: "findRecipie",
  value: "",
  placeholder: "Find Recipie By Name..",
  type: "text",
  errorMsg: "",
  isInvalid: false,
};

export const recipiesInputs: IInputDefinition[] = [
  {
    name: "name",
    label: "Name",
    value: "",
    placeholder: "Recipie Name..",
    type: "text",
    errorMsg: "",
    isInvalid: false,
  },
  {
    name: "description",
    label: "Description",
    value: "",
    placeholder: "Add a Recipie Description..",
    type: "textarea",
    errorMsg: "",
    isInvalid: false,
  },
  {
    name: "duration",
    label: "Duration",
    value: "",
    placeholder: "Recipie Duration in mins..",
    type: "number",
    errorMsg: "",
    isInvalid: false,
  },
  {
    label: "Servings",
    name: "servings",
    value: "",
    placeholder: "Recipie Servings..",
    type: "number",
    errorMsg: "",
    isInvalid: false,
  },
  {
    label: "Level",
    name: "level",
    value: "",
    placeholder: "Recipie Level..",
    type: "text",
    errorMsg: "",
    isInvalid: false,
  },
  {
    label: "Ingredients",
    name: "ingredients",
    value: [],
    optionsType: "text",
    type: "group",
    placeholder: "Recipie Ingredient..",
    qtty: 5,
    errorMsg: "",
    isInvalid: false,
  },
  {
    label: "Steps",
    name: "steps",
    value: [],
    optionsType: "textarea",
    type: "group",
    placeholder: "Recipie Steps..",
    qtty: 5,
    errorMsg: "",
    isInvalid: false,
  },
];

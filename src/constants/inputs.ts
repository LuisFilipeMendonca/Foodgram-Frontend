interface Input {
  id: string;
  value: string;
  label: string;
  placeholder: string;
}

export const loginInputs: Input[] = [
  {
    id: "email",
    label: "Email",
    value: "",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    label: "Password",
    value: "",
    placeholder: "Enter your password",
  },
];

export const registerInputs: Input[] = [
  {
    id: "name",
    label: "Name",
    value: "",
    placeholder: "Enter your name",
  },
  ...loginInputs,
];

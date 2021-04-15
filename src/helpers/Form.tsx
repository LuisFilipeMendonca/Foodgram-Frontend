import { IInputDefinition } from "../interfaces/Inputs";

interface IFormObj {
  [key: string]: string;
}

class Form {
  inputs: IInputDefinition[];

  constructor(inputs: IInputDefinition[]) {
    this.inputs = inputs;
  }

  buildFormObj = (): IFormObj => {
    const obj: IFormObj = {};

    this.inputs.forEach((input) => {
      const { name, value } = input;
      if (typeof value === "string") {
        obj[name] = value;
      }
    });

    return obj;
  };

  formValidate = () => {
    let isFormValid = true;
    this.inputs.forEach((input) => {
      if (input.validator) {
        const { isValid, errorMsg } = input.validator(input);

        if (!isValid) {
          input.isInvalid = !isValid;
          input.errorMsg = errorMsg;
          isFormValid = isFormValid && isValid;
        }
      }
    });
    return { isFormValid, validatedInputs: this.inputs };
  };
}

export default Form;

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

  buildFormData = () => {
    const formData = new FormData();

    this.inputs.forEach((input) => {
      if (input.type === "file" && typeof input.value === "string") return;

      if (Array.isArray(input.value)) {
        const values: string[] = [];

        input.value.forEach((inputVal) => {
          values.push(inputVal.value);
        });

        values.forEach((value) => formData.append(input.name + "[]", value));
      } else {
        formData.append(input.name, input.value);
      }
    });

    return formData;
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

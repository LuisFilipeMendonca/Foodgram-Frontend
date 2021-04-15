import { IInputDefinition } from "../interfaces/Inputs";

class Form {
  inputs: IInputDefinition[];

  constructor(inputs: IInputDefinition[]) {
    this.inputs = inputs;
  }

  buildFormObj = () => {};

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

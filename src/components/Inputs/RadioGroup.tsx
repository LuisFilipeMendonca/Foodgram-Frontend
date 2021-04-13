import React from "react";

import {
  RadioGroupContainer,
  RadioGroupLabel,
  RadioGroupOptions,
  RadioInputGroup,
  InputRadioLabel,
  InputRadio,
  InputRadioBullet,
} from "./styled";

interface IInputRadio {
  type: string;
  label: string;
  id: string;
}

interface IRadioGroup {
  title: string;
  inputs: IInputRadio[];
  selectedValue: string;
  name: string;
  changeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<IRadioGroup> = ({
  inputs,
  selectedValue,
  title,
  name,
  changeHandler,
}) => {
  return (
    <RadioGroupContainer>
      <RadioGroupLabel>{title}</RadioGroupLabel>
      <RadioGroupOptions>
        {inputs.map((input) => (
          <RadioInputGroup key={input.id}>
            <InputRadio
              type={input.type}
              name={name}
              id={input.id}
              value={input.id}
              onChange={(e) => changeHandler(e)}
              checked={selectedValue === input.id}
            />
            <InputRadioBullet />
            <InputRadioLabel htmlFor={input.id}>{input.label}</InputRadioLabel>
          </RadioInputGroup>
        ))}
      </RadioGroupOptions>
    </RadioGroupContainer>
  );
};

export default RadioGroup;

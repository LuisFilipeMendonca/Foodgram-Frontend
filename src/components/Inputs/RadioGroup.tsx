import React from "react";

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
    <>
      <h3>{title}</h3>
      <div className="filters__options">
        {inputs.map((input) => (
          <div className="input__group">
            <input
              type={input.type}
              name={name}
              id={input.id}
              value={input.id}
              onChange={(e) => changeHandler(e)}
              checked={selectedValue === input.id}
            />
            <label htmlFor={input.id}>{input.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;

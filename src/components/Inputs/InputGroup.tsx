import React, { useState } from "react";

import { IInputGroup } from "../../interfaces/Inputs";

const InputGroup: React.FC<IInputGroup> = ({
  label,
  name,
  placeholder,
  qtty,
  changeHandler,
  focusHandler,
}) => {
  const [inputQtty, setInputQtty] = useState(qtty);

  const addMoreIngredientsHandler = () => setInputQtty(inputQtty + 1);

  return (
    <div>
      <label>{label}</label>
      {Array.from({ length: inputQtty }, (_, idx) => idx + 1).map((value) => (
        <input
          onFocus={() => focusHandler(name)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e)
          }
          key={value}
          type="text"
          name={name}
          id={value.toString()}
          placeholder={placeholder}
        />
      ))}
      <button type="button" onClick={addMoreIngredientsHandler}>
        Add More Ingredients
      </button>
    </div>
  );
};

export default InputGroup;

import React, { useState } from "react";

import { findRecipieInput } from "../../constants/inputs";

import Input from "../../components/Inputs";

import { CtaContainer } from "./styled";

interface IMyRecipieCta {
  recipieNameFilterHandler: (value: string) => void;
}

const MyRecipieCta: React.FC<IMyRecipieCta> = ({
  recipieNameFilterHandler,
}) => {
  const [input, setInput] = useState(findRecipieInput);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, value: e.currentTarget.value });
  };

  return (
    <CtaContainer>
      <button>Add Recipie</button>
      <Input
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        value={input.value}
        errorMsg={input.errorMsg}
        isInvalid={input.isInvalid}
        changeHandler={inputChangeHandler}
        focusHandler={() => {}}
      />
      <button
        onClick={() =>
          recipieNameFilterHandler(
            typeof input.value === "string" ? input.value : ""
          )
        }
      >
        Search
      </button>
    </CtaContainer>
  );
};

export default MyRecipieCta;

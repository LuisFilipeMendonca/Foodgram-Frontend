import React, { useState } from "react";

import { findRecipieInput } from "../../constants/inputs";

import Input from "../../components/Inputs";

import { CtaContainer } from "./styled";

const MyRecipieCta: React.FC = () => {
  const [input, setInput] = useState(findRecipieInput);

  const inputChangeHandler = () => {};
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
      <button>Search</button>
    </CtaContainer>
  );
};

export default MyRecipieCta;

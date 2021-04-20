import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { MainContainer } from "../styles";

import { recipiesInputs } from "../constants/inputs";
import { IInputDefinition } from "../interfaces/Inputs";

import useInputs from "../hooks/useInputs";

import Form from "../components/Form";
import Input from "../components/Inputs";
import { useAppSelector } from "../hooks/useAppSelector";

const AddRecipie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userRecipies } = useAppSelector((state) => state.user);
  const { inputs, changeHandler, setHandler, focusHandler } = useInputs(
    recipiesInputs
  );

  useEffect(() => {
    if (id) {
      const recipie = userRecipies.find((recipie) => recipie._id === id) as {
        [key: string]: any;
      };
      let setInputRecipie: IInputDefinition[] = [];

      if (recipie) {
        setInputRecipie = inputs.map((field) => {
          if (field.type === "group") {
            field.qtty = recipie[field.name].length;
          }

          return {
            ...field,
            value: recipie[field.name],
          };
        });
      }

      setHandler(setInputRecipie);
    }
  }, []);

  const inputElems = inputs.map(
    ({
      label,
      value,
      errorMsg,
      isInvalid,
      placeholder,
      type,
      info,
      name,
      qtty,
      optionsType,
    }) => {
      return (
        <Input
          key={name}
          label={label}
          value={value}
          errorMsg={errorMsg}
          isInvalid={isInvalid}
          placeholder={placeholder}
          type={type}
          info={info}
          name={name}
          qtty={qtty}
          optionsType={optionsType}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
        />
      );
    }
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <MainContainer>
      <Form
        submitDescription="Add recipie"
        title="Add Recipie"
        submitHandler={submitHandler}
      >
        {inputElems}
      </Form>
    </MainContainer>
  );
};

export default AddRecipie;

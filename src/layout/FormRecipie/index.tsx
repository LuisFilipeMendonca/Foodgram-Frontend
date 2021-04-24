import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { recipiesInputs } from "../../constants/inputs";
import { IInputDefinition } from "../../interfaces/Inputs";

import useInputs from "../../hooks/useInputs";

import Form from "../../components/Form";
import Input from "../../components/Inputs";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { addRecipie, editRecipie, logoutUser } from "../../store/user/slice";

import FormHelper from "../../helpers/Form";

const FormRecipie: React.FC = () => {
  const dispatch = useAppDispatch();
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
            field.value = recipie[field.name].map(
              (value: string, idx: number) => ({
                id: idx.toString(),
                value: value,
              })
            );
          } else if (field.type === "file") {
            field.value = recipie["photoUrl"];
          } else {
            field.value = recipie[field.name].toString();
          }

          return field;
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
          value={
            type === "file" && typeof value !== "string"
              ? URL.createObjectURL(value)
              : value
          }
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

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    const { isFormValid, validatedInputs } = form.formValidate();

    if (!isFormValid) {
      setHandler(validatedInputs);
      return;
    }

    const formData = form.buildFormData();

    try {
      if (!id) {
        await dispatch(addRecipie(formData));
      } else {
        await dispatch(editRecipie({ formData, id }));
      }
    } catch (e) {}
  };

  return (
    <Form
      submitDescription={id ? "Edit Recipie" : "Add Recipie"}
      title={id ? "Edit Recipie" : "Add Recipie"}
      submitHandler={submitHandler}
    >
      {inputElems}
    </Form>
  );
};

export default FormRecipie;

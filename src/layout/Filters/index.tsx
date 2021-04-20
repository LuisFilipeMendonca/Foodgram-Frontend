import React, { useState } from "react";

import { FiltersContainer } from "./styled";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import {
  setItemsPerPage,
  setItemsOrder,
  setRecipieName,
} from "../../store/recipies/slice";

import { findRecipieInput } from "../../constants/inputs";

import Input from "../../components/Inputs";

import RadioGroup from "../../components/Inputs/RadioGroup";

const sortInputs = [
  { type: "radio", id: "recent", label: "Recents Recipies" },
  { type: "radio", id: "old", label: "Old Recipies" },
  { type: "radio", id: "highStars", label: "High Rating" },
  { type: "radio", id: "lowStars", label: "Low Rating" },
];

const recipiesQttyInputs = [
  { type: "radio", id: "6", label: "Six Recipies" },
  { type: "radio", id: "12", label: "Twelve Recipies" },
  { type: "radio", id: "18", label: "Eighteen Recipies" },
];

const Filters: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [input, setInput] = useState(findRecipieInput);
  const dispatch = useAppDispatch();
  const { itemsOrderValue, itemsPerPage } = useAppSelector(
    (state) => state.recipies
  );

  const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

  const itemsPerPageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setItemsPerPage(e.currentTarget.value));
  };

  const itemsOrderHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setItemsOrder(e.currentTarget.value));
  };

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;

    setInput({ ...input, value });
  };

  const getRecipiesByNameHandler = () => {
    if (typeof input.value === "string") {
      dispatch(setRecipieName(input.value));
    }
  };

  return (
    <FiltersContainer isOpen={isFiltersOpen}>
      <div className="filters__visible">
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
        <div className="filters__cta">
          <button onClick={getRecipiesByNameHandler}>Search</button>
          <button onClick={toggleFilters}>Filters</button>
        </div>
      </div>
      <ul className="filters__menu">
        <RadioGroup
          inputs={sortInputs}
          changeHandler={itemsOrderHandler}
          title="Sort By"
          selectedValue={itemsOrderValue}
          name="sort"
        />
        <RadioGroup
          title="Items Per Page"
          changeHandler={itemsPerPageHandler}
          inputs={recipiesQttyInputs}
          selectedValue={itemsPerPage}
          name="itemsPerPage"
        />
      </ul>
    </FiltersContainer>
  );
};

export default Filters;

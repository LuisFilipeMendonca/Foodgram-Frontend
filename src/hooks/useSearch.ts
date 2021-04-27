import { useState } from "react";
import { IRecipie } from "../interfaces/Recipies";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const setSearchHandler = (value: string) => {
    setSearchValue(value);
  };

  const filterSearchedRecipies = (recipiesArr: IRecipie[]): IRecipie[] => {
    if (!searchValue) return recipiesArr;

    return recipiesArr.filter((recipie) =>
      recipie.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  };

  const limitSearcedhRecipies = (
    recipiesArr: IRecipie[],
    min: number,
    max: number
  ): IRecipie[] => {
    return recipiesArr.slice(min, max);
  };

  return {
    searchValue,
    setSearchHandler,
    filterSearchedRecipies,
    limitSearcedhRecipies,
  };
};

export default useSearch;

import { IRecipieFullCard } from "../../type";

interface IRecipieState {
  recipies: IRecipieFullCard[];
  count: number;
  isLoading: boolean;
  currentPage: number;
}

export const recipiesInitialState: IRecipieState = {
  recipies: [],
  count: 0,
  isLoading: false,
  currentPage: 1,
};

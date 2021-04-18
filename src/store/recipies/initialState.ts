import { IRecipieFullCard } from "../../type";

interface IRecipieState {
  recipies: IRecipieFullCard[];
  count: number;
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: string;
  itemsOrderValue: string;
  recipieName: string;
}

export const recipiesInitialState: IRecipieState = {
  recipies: [],
  count: 0,
  isLoading: false,
  currentPage: 1,
  itemsPerPage: "6",
  itemsOrderValue: "recent",
  recipieName: "",
};

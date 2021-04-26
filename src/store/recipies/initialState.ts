import { IRecipie } from "../../interfaces/Recipies";

interface IRecipieState {
  recipies: IRecipie[];
  count: number;
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: string;
  itemsOrderValue: string;
  recipieName: string;
  userRecipies: IRecipie[];
  userFavorites: IRecipie[];
}

export const recipiesInitialState: IRecipieState = {
  recipies: [],
  count: 0,
  isLoading: false,
  currentPage: 1,
  itemsPerPage: "6",
  itemsOrderValue: "recent",
  recipieName: "",
  userRecipies: [],
  userFavorites: [],
};

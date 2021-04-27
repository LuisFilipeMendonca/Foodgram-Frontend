import React, { useState } from "react";

import { MainContainer, Section } from "../styles";

import { useAppSelector } from "../hooks/useAppSelector";
import useSearch from "../hooks/useSearch";

import Pagination from "../components/Pagination";

import RecipiesGrid from "../layout/RecipiesGrid";
import RecipieSearch from "../layout/RecipieSearch";
import { IRecipie } from "../interfaces/Recipies";

const FavoritesPage: React.FC = () => {
  const {
    setSearchHandler,
    filterSearchedRecipies,
    limitSearcedhRecipies,
  } = useSearch();
  const { userFavorites } = useAppSelector((state) => state.recipies);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const recipieNameFilterHandler = (value: string) => {
    setSearchHandler(value);
  };

  const searchedRecipies = filterSearchedRecipies(userFavorites);

  const limitedSearchRecipies = limitSearcedhRecipies(
    searchedRecipies,
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setPageHandler = (pageValue: number): void => {
    setCurrentPage(pageValue);
  };

  return (
    <MainContainer>
      <RecipieSearch recipieNameFilterHandler={recipieNameFilterHandler} />
      <Section>
        <RecipiesGrid recipiesData={limitedSearchRecipies} isFavorites={true} />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          count={userFavorites.length}
          visiblePages={4}
          setPageHandler={setPageHandler}
        />
      </Section>
    </MainContainer>
  );
};

export default FavoritesPage;

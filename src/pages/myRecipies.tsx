import React, { useState } from "react";

import { MainContainer, Section } from "../styles";

import RecipieSearch from "../layout/RecipieSearch";
import Pagination from "../components/Pagination";
import RecipiesGrid from "../layout/RecipiesGrid";

import { useAppSelector } from "../hooks/useAppSelector";
import useSearch from "../hooks/useSearch";

const MyRecipiesPage: React.FC = () => {
  const itemsPerPage = 12;
  const {
    setSearchHandler,
    filterSearchedRecipies,
    limitSearcedhRecipies,
  } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const { userRecipies } = useAppSelector((state) => state.recipies);

  const searchedRecipies = filterSearchedRecipies(userRecipies);

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
      <RecipieSearch recipieNameFilterHandler={setSearchHandler} />
      <Section>
        <RecipiesGrid
          recipiesData={limitedSearchRecipies}
          isUserRecipie={true}
          emptyText="You haven't added any recipies yet. What are you waiting for?"
        />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          count={userRecipies.length}
          visiblePages={4}
          setPageHandler={setPageHandler}
        />
      </Section>
    </MainContainer>
  );
};

export default MyRecipiesPage;

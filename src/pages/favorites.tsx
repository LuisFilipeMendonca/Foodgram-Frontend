import React, { useState } from "react";

import { MainContainer, Section } from "../styles";

import { useAppSelector } from "../hooks/useAppSelector";

import Pagination from "../components/Pagination";

import RecipiesGrid from "../layout/RecipiesGrid";

const FavoritesPage: React.FC = () => {
  const { userFavorites } = useAppSelector((state) => state.recipies);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const recipies = userFavorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setPageHandler = (pageValue: number): void => {
    setCurrentPage(pageValue);
  };

  return (
    <MainContainer>
      <Section>
        <RecipiesGrid recipiesData={recipies} isFavorites={true} />
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

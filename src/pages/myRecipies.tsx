import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { MainContainer, Section } from "../styles";

import MyRecipieCta from "../layout/MyRecipieCta";
import Pagination from "../components/Pagination";
import RecipiesGrid from "../layout/RecipiesGrid";

import { useAppSelector } from "../hooks/useAppSelector";

const MyRecipiesPage: React.FC = () => {
  const location = useLocation();

  const itemsPerPage = 12;
  const [recipieNameFilter, setRecipieNameFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let { userRecipies } = useAppSelector((state) => state.recipies);

  if (recipieNameFilter) {
    userRecipies = userRecipies.filter((recipie) =>
      recipie.name.toLowerCase().includes(recipieNameFilter.toLocaleLowerCase())
    );
  }

  const recipies = userRecipies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const recipieNameFilterHandler = (value: string) => {
    setRecipieNameFilter(value);
  };

  const setPageHandler = (pageValue: number): void => {
    setCurrentPage(pageValue);
  };

  return (
    <MainContainer>
      <MyRecipieCta recipieNameFilterHandler={recipieNameFilterHandler} />
      <Section>
        <RecipiesGrid recipiesData={recipies} isUserRecipie={true} />
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

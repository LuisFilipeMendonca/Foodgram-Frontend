import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { MainContainer } from "../styles";
import { SectionRecipies, RecipiesContainer } from "../styles";

import MyRecipieCta from "../layout/MyRecipieCta";
import Pagination from "../components/Pagination";
import RecipieCard from "../components/RecipieCard";

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

  const recipiesCards = recipies.map((recipie) => (
    <RecipieCard
      key={Math.random()}
      photoUrl={recipie.photoUrl}
      name={recipie.name}
      votes={recipie.votes}
      votesCount={recipie.votesCount}
      _id={recipie._id}
      ratings={recipie.ratings}
      isRatable={false}
      isUserRecipie={true}
    />
  ));

  const setPageHandler = (pageValue: number): void => {
    setCurrentPage(pageValue);
  };

  return (
    <MainContainer>
      <MyRecipieCta recipieNameFilterHandler={recipieNameFilterHandler} />
      <SectionRecipies>
        <RecipiesContainer>{recipiesCards}</RecipiesContainer>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          count={userRecipies.length}
          visiblePages={4}
          setPageHandler={setPageHandler}
        />
      </SectionRecipies>
    </MainContainer>
  );
};

export default MyRecipiesPage;

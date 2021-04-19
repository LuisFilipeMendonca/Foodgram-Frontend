import React, { useState } from "react";

import { MainContainer } from "../styles";
import { SectionRecipies, RecipiesContainer } from "../styles";

import MyRecipieCta from "../layout/MyRecipieCta";
import Pagination from "../components/Pagination";
import RecipieCard from "../components/RecipieCard";

import { useAppSelector } from "../hooks/useAppSelector";

const MyRecipiesPage: React.FC = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const { userRecipies } = useAppSelector((state) => state.user);

  const recipies = userRecipies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      <MyRecipieCta />
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

import React, { useEffect } from "react";

import { SectionRecipies, RecipiesContainer } from "../styles";
import { MainContainer } from "../styles";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { fetchRecipies, setCurrentPage } from "../store/recipies/slice";
import { setPath } from "../store/location/slice";

import RecipieCard from "../components/RecipieCard";
import Pagination from "../components/Pagination";
import RecipieSkeleton from "../components/RecipieSkeleton";
import Filters from "../layout/Filters";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    recipies,
    count,
    isLoading,
    currentPage,
    itemsPerPage,
    itemsOrderValue,
  } = useAppSelector((state) => state.recipies);
  const { prevPath } = useAppSelector((state) => state.location);

  const setPageHandler = (pageValue: number): void => {
    dispatch(setCurrentPage(pageValue));
  };

  useEffect(() => {
    if (prevPath === "/recipies") {
      dispatch(setPath(""));
      return;
    }

    window.scroll({ top: 0 });

    dispatch(fetchRecipies(currentPage));
  }, [currentPage, dispatch, itemsPerPage, itemsOrderValue]);

  const recipiesCards = recipies.map((recipie) => (
    <RecipieCard
      key={Math.random()}
      photo={recipie.photoUrl}
      name={recipie.name}
      stars={recipie.stars}
      id={recipie._id}
    />
  ));

  return (
    <MainContainer>
      <Filters />
      <SectionRecipies>
        <RecipiesContainer>
          {!isLoading && recipies.length && recipiesCards}
          {isLoading &&
            Array.from(
              { length: +itemsPerPage },
              (_, idx) => idx + 1
            ).map((value) => <RecipieSkeleton key={value} />)}
        </RecipiesContainer>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={+itemsPerPage}
          count={count}
          visiblePages={4}
          setPageHandler={setPageHandler}
        />
      </SectionRecipies>
    </MainContainer>
  );
};

export default HomePage;

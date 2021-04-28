import React, { useEffect } from "react";

import { MainContainer, Section } from "../styles";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { fetchRecipies, setCurrentPage } from "../store/recipies/slice";
import { setPath } from "../store/location/slice";

import Pagination from "../components/Pagination";
import Filters from "../layout/Filters";
import RecipieGrid from "../layout/RecipiesGrid";
import { toast } from "react-toastify";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    recipies,
    count,
    isLoading,
    currentPage,
    itemsPerPage,
    itemsOrderValue,
    recipieName,
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

    dispatch(fetchRecipies());
  }, [currentPage, dispatch, itemsPerPage, itemsOrderValue, recipieName]);

  return (
    <MainContainer>
      <Filters />
      <Section hasMarginLeft hasPaddingTop>
        <RecipieGrid
          recipiesData={recipies}
          isLoading={isLoading}
          itemsPerPage={+itemsPerPage}
          emptyText="No recipies added unitl now. Can you be the first?"
        />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={+itemsPerPage}
          count={count}
          visiblePages={4}
          setPageHandler={setPageHandler}
        />
      </Section>
    </MainContainer>
  );
};

export default HomePage;

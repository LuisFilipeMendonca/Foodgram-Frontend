import React, { useEffect } from "react";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { fetchRecipies, setCurrentPage } from "../store/recipies/slice";
import { setPath } from "../store/location/slice";

import RecipieCard from "../components/RecipieCard";
import Pagination from "../components/Pagination";
import Filters from "../layout/Filters";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    recipies,
    count,
    isLoading,
    currentPage,
    itemsPerPage,
    itemsOrderQuery,
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

    dispatch(fetchRecipies(currentPage));
  }, [currentPage, dispatch, itemsPerPage, itemsOrderQuery]);

  const recipiesCards = recipies.map((recipie) => (
    <RecipieCard
      key={Math.random()}
      photo={recipie.photoUrl}
      name={recipie.name}
      stars={recipie.stars}
      id={recipie._id}
    />
  ));

  if (isLoading) {
    return <div>IsLoading</div>;
  }

  return (
    <>
      <Filters />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        count={count}
        visiblePages={4}
        setPageHandler={setPageHandler}
      />
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(0, 300px))",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          padding: "16px",
        }}
      >
        {recipiesCards}
      </ul>
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { fetchRecipies } from "../store/recipies/slice";

import RecipieCard from "../components/RecipieCard";
import Pagination from "../components/Pagination";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const { recipies, count, isLoading } = useAppSelector(
    (state) => state.recipies
  );

  const setPageHandler = (pageValue: number): void => {
    setCurrentPage(pageValue);
  };

  useEffect(() => {
    dispatch(fetchRecipies());
  }, []);

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
      <Pagination
        currentPage={currentPage}
        itemsPerPage={3}
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

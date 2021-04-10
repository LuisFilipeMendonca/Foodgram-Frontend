import React, { useState } from "react";

import { FiltersContainer } from "./styled";

import { useAppDispatch } from "../../hooks/useAppDispatch";

import { setItemsPerPage, setCurrentPage } from "../../store/recipies/slice";

const Filters: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

  const itemsPerPageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    dispatch(setItemsPerPage(+e.currentTarget.value));
  };

  return (
    <FiltersContainer isOpen={isFiltersOpen}>
      <div className="filters__visible">
        <input type="text" placeholder="Search by recipie name.." />
        <div className="filters__cta">
          <button>Search</button>
          <button onClick={toggleFilters}>Filters</button>
        </div>
      </div>
      <ul className="filters__menu">
        <li className="filters__item">
          <h3>Sort By</h3>
          <div className="filters__options">
            <div className="input__group">
              <input
                type="radio"
                id="recents"
                name="sort"
                value="1"
                data-field="createdAt"
              />
              <label htmlFor="recents">Recents</label>
            </div>
            <div className="input__group">
              <input
                type="radio"
                id="olds"
                name="sort"
                value="-1"
                data-field="createdAt"
              />
              <label htmlFor="olds">Old</label>
            </div>
            <div className="input__group">
              <input
                type="radio"
                id="high"
                name="sort"
                value="1"
                data-field="stars"
              />
              <label htmlFor="high">High Stars</label>
            </div>
            <div className="input__group">
              <input
                type="radio"
                id="low"
                name="sort"
                value="-1"
                data-field="stars"
              />
              <label htmlFor="low">Low Stars</label>
            </div>
          </div>
        </li>
        <li>
          <h3>Items Per Page</h3>
          <div className="filters__options">
            <div className="input__group">
              <input
                type="radio"
                id="six"
                name="itemsPerPage"
                value="6"
                onChange={(e) => itemsPerPageHandler(e)}
              />
              <label htmlFor="six">Six</label>
            </div>
            <div className="input__group">
              <input type="radio" id="twelve" name="itemsPerPage" value="12" />
              <label htmlFor="twelve">Twelve</label>
            </div>
            <div className="input__group">
              <input
                type="radio"
                id="eighteen"
                name="itemsPerPage"
                value="18"
              />
              <label htmlFor="eighteen">Eighteen</label>
            </div>
          </div>
        </li>
      </ul>
    </FiltersContainer>
  );
};

export default Filters;

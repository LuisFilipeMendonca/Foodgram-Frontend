import React from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

import { PaginationContainer, PaginationMenu, PaginationItem } from "./styled";

interface IPaginationProps {
  currentPage: number;
  count: number;
  itemsPerPage: number;
  visiblePages: number;
  setPageHandler: (page: number) => void;
}

type PaginationArr = {
  value: JSX.Element | number;
  id: string;
};

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  count,
  itemsPerPage,
  visiblePages,
  setPageHandler,
}) => {
  const pagesAmount = Math.ceil(count / itemsPerPage);
  const pagesArr: PaginationArr[] = [
    {
      value: <RiArrowLeftSFill size={16} />,
      id: "left",
    },
  ];

  if (visiblePages + currentPage < pagesAmount) {
    for (let i = currentPage; i < currentPage + visiblePages / 2; i++) {
      pagesArr.push({ value: i, id: i.toString() });
    }
    pagesArr.push({ value: <span>&#8230;</span>, id: "ellipsis" });

    for (let i = pagesAmount - visiblePages / 2 + 1; i <= pagesAmount; i++) {
      pagesArr.push({ value: i, id: i.toString() });
    }
  }

  if (
    visiblePages + currentPage >= pagesAmount &&
    pagesAmount - visiblePages > 0
  ) {
    for (let i = pagesAmount - visiblePages; i <= pagesAmount; i++) {
      pagesArr.push({ value: i, id: i.toString() });
    }
  }

  if (
    visiblePages + currentPage >= pagesAmount &&
    pagesAmount - visiblePages === 0
  ) {
    for (let i = 1; i <= pagesAmount; i++) {
      pagesArr.push({ value: i, id: i.toString() });
    }
  }

  pagesArr.push({
    value: <RiArrowRightSFill size={16} />,
    id: "right",
  });

  const setCurrentPage = (values: PaginationArr) => {
    let page = currentPage;

    if (values.id === "right") {
      page += 1;
    } else if (values.id === "left") {
      page -= 1;
    } else {
      page = +values.value;
    }

    setPageHandler(page);
  };

  return (
    <PaginationContainer>
      <PaginationItem
        hasFullBorder
        hasBorderRadius
        onClick={() => setPageHandler(1)}
      >
        First
      </PaginationItem>
      <PaginationMenu>
        {pagesArr.map((page) => (
          <li key={page.id}>
            <PaginationItem
              disabled={
                (page.id === "left" && currentPage === 1) ||
                (page.id === "right" && currentPage === pagesAmount)
              }
              isSelected={currentPage === page.value}
              hasFixedWidth
              onClick={() => setCurrentPage({ value: page.value, id: page.id })}
            >
              {page.value}
            </PaginationItem>
          </li>
        ))}
      </PaginationMenu>
      <PaginationItem
        hasFullBorder
        hasBorderRadius
        onClick={() => setPageHandler(pagesAmount)}
      >
        Last
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;

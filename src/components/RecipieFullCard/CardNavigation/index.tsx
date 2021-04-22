import React from "react";

import { CardNavigationContainer, CardNavigationItem } from "./styled";

interface ICardNavigation {
  selectedNav: string;
  setSelectedNavHandler: (value: string) => void;
}

const CardNavigation: React.FC<ICardNavigation> = ({
  selectedNav,
  setSelectedNavHandler,
}) => {
  return (
    <CardNavigationContainer>
      <CardNavigationItem
        onClick={() => setSelectedNavHandler("details")}
        isSelected={selectedNav === "details"}
      >
        Details
      </CardNavigationItem>
      <CardNavigationItem
        onClick={() => setSelectedNavHandler("ingredients")}
        isSelected={selectedNav === "ingredients"}
      >
        Ingredients
      </CardNavigationItem>
      <CardNavigationItem
        onClick={() => setSelectedNavHandler("preparation")}
        isSelected={selectedNav === "preparation"}
      >
        Preparation
      </CardNavigationItem>
    </CardNavigationContainer>
  );
};

export default CardNavigation;

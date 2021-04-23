import React, { useEffect, useState } from "react";

import { IRecipie } from "../../interfaces/Recipies";

import {
  CardContainer,
  CardDetailsContainer,
  CardDetails,
  CardNavigationBorder,
  CardDetailsContent,
} from "./styled";

import CardImage from "./CardImage";
import CardNavigation from "./CardNavigation";
import CardIngredients from "./CardIngredients";
import CardSteps from "./CardSteps";
import CardInformation from "./CardInformation";

const RecipieFullCard: React.FC<IRecipie> = ({
  photo,
  photoUrl,
  duration,
  servings,
  description,
  name,
  ingredients,
  steps,
  level,
  user,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("details");

  const setSelectedNavHandler = (value: string): void => {
    setSelectedNav(value);
  };

  useEffect(() => {
    const openRecipie = setTimeout(() => setIsOpen(true), 500);

    return () => clearTimeout(openRecipie);
  }, []);

  return (
    <CardContainer>
      <CardImage
        duration={duration}
        isOpen={isOpen}
        name={name}
        photoUrl={photoUrl}
        servings={servings}
      />
      <CardDetailsContainer isOpen={isOpen}>
        <CardDetails isOpen={isOpen}>
          <CardNavigation
            selectedNav={selectedNav}
            setSelectedNavHandler={setSelectedNavHandler}
          />
          <CardNavigationBorder />
          <CardDetailsContent>
            {selectedNav === "details" && (
              <CardInformation
                description={description}
                level={level}
                username={user.username}
                name={name}
              />
            )}
            {selectedNav === "ingredients" && (
              <CardIngredients ingredients={ingredients} />
            )}
            {selectedNav === "preparation" && <CardSteps steps={steps} />}
          </CardDetailsContent>
        </CardDetails>
      </CardDetailsContainer>
    </CardContainer>
  );
};

export default RecipieFullCard;

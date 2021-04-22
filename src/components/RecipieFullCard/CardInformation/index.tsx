import React from "react";

import {
  RecipieInformationContainer,
  RecipieInformationTitle,
  RecipieInformationDescription,
  RecipieInformationLabel,
} from "./styled";

interface ICardInformation {
  name: string;
  description: string;
  username: string;
  level: string;
}

const CardInformation: React.FC<ICardInformation> = ({
  name,
  description,
  username,
  level,
}) => {
  return (
    <RecipieInformationContainer>
      <RecipieInformationTitle>{name}</RecipieInformationTitle>
      <RecipieInformationDescription>
        {description}
      </RecipieInformationDescription>
      <RecipieInformationDescription>
        <RecipieInformationLabel>Added by: </RecipieInformationLabel>
        {username}
      </RecipieInformationDescription>
      <RecipieInformationDescription>
        <RecipieInformationLabel>Level: </RecipieInformationLabel>
        {level}
      </RecipieInformationDescription>
    </RecipieInformationContainer>
  );
};

export default CardInformation;

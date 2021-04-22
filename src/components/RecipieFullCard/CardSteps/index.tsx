import React from "react";

import {
  CardPreparationStep,
  CardPreparationSteps,
  CardStep,
  CardStepDescription,
} from "./styled";

interface IRecipieSteps {
  steps: string[];
}

const CardSteps: React.FC<IRecipieSteps> = ({ steps }) => {
  return (
    <CardPreparationSteps>
      {steps.map((step, index) => (
        <CardPreparationStep key={Math.random()}>
          <CardStep>Step {++index}</CardStep>
          <CardStepDescription>{step}</CardStepDescription>
        </CardPreparationStep>
      ))}
    </CardPreparationSteps>
  );
};

export default CardSteps;

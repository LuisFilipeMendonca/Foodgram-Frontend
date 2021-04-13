import React from "react";

import {
  RecipieSkeletonContainer,
  SkeletonImg,
  SkeletonInformation,
  SkeletonBox,
} from "./styled";

import RecipieRating from "../RecipieRating";

const RecipieSkeleton: React.FC = () => {
  return (
    <RecipieSkeletonContainer>
      <SkeletonImg />
      <SkeletonInformation>
        <SkeletonBox />
        <RecipieRating isLoading={true} />
      </SkeletonInformation>
    </RecipieSkeletonContainer>
  );
};

export default RecipieSkeleton;

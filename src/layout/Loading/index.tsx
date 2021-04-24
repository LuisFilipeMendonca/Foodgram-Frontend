import React from "react";

import {
  LoadingContainer,
  LoadingTitle,
  LoadingItem,
  LoadingItemContainer,
} from "./styled";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingTitle>Loading your data</LoadingTitle>
      <LoadingItemContainer>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </LoadingItemContainer>
    </LoadingContainer>
  );
};

export default Loading;

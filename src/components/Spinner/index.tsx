import React from "react";

import { SpinnerContainer, SpinnerItem } from "./styled";

const Loading: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerItem />
      <SpinnerItem />
      <SpinnerItem />
      <SpinnerItem />
      <SpinnerItem />
      <SpinnerItem />
    </SpinnerContainer>
  );
};

export default Loading;

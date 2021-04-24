import React from "react";

import { NotFoundContainer, NotFoundTitle } from "./styled";

import BaseButton from "../../components/BaseButton";

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - No Recipies Here!</NotFoundTitle>
      <BaseButton path="/" role="link" className="primary">
        Take Me Back Home
      </BaseButton>
    </NotFoundContainer>
  );
};

export default NotFound;

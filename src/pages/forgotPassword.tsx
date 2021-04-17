import React from "react";

import { MainContainerAuth } from "../styles";

import FormForgotPassword from "../layout/FormForgotPassword";

const ForgotPasswordPage: React.FC = () => {
  return (
    <MainContainerAuth>
      <FormForgotPassword />
    </MainContainerAuth>
  );
};

export default ForgotPasswordPage;

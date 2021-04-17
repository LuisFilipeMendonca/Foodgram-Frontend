import React from "react";

import { MainContainerAuth } from "../styles";

import FormResetPassword from "../layout/FormResetPassword";

const ResetPasswordPage: React.FC = () => {
  return (
    <MainContainerAuth>
      <FormResetPassword />
    </MainContainerAuth>
  );
};

export default ResetPasswordPage;

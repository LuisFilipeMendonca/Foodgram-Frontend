import React, { useState } from "react";

import { MainContainerAuth } from "../styles";
import { SectionForm } from "./styled";

import FormLogin from "../layout/FormLogin";
import FormRegister from "../layout/FormRegister";

const AuthPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);

  const changeAuthHandler = () => setIsLogging(!isLogging);

  return (
    <MainContainerAuth>
      <SectionForm>
        {isLogging ? (
          <FormLogin changeAuthHandler={changeAuthHandler} />
        ) : (
          <FormRegister changeAuthHandler={changeAuthHandler} />
        )}
      </SectionForm>
    </MainContainerAuth>
  );
};

export default AuthPage;

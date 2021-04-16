import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { MainContainerAuth } from "../styles";
import { SectionForm } from "./styled";

import FormLogin from "../layout/FormLogin";
import FormRegister from "../layout/FormRegister";

import { useAppSelector } from "../hooks/useAppSelector";

const AuthPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);
  const { isLogged } = useAppSelector((state) => state.user);

  const changeAuthHandler = () => setIsLogging(!isLogging);

  if (isLogged) {
    return <Redirect to="/" />;
  }

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

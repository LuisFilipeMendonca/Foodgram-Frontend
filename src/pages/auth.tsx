import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { MainContainer } from "../styles";

import FormLogin from "../layout/FormLogin";
import FormRegister from "../layout/FormRegister";

import { useAppSelector } from "../hooks/useAppSelector";

const AuthPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);
  const { isLogged } = useAppSelector((state) => state.user);
  const location = useLocation();
  const history = useHistory();

  const changeAuthHandler = () => setIsLogging(!isLogging);

  useEffect(() => {
    if (isLogged) {
      const redirectPath = location.search.split("=")[1];
      history.replace(redirectPath || "");
    }
  }, [isLogged]);

  return (
    <MainContainer>
      {isLogging ? (
        <FormLogin changeAuthHandler={changeAuthHandler} />
      ) : (
        <FormRegister changeAuthHandler={changeAuthHandler} />
      )}
    </MainContainer>
  );
};

export default AuthPage;

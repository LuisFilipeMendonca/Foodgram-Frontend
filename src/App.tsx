import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/index";

import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getUserData, userNotLogged } from "./store/user/slice";

import Navbar from "./layout/Navbar";
import Routes from "./routes";

const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { isAppLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("foodgram");

    if (token) {
      dispatch(getUserData(token));
    } else {
      dispatch(userNotLogged());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isAppLoading ? (
        <div>Is Loading</div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

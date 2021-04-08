import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/index";
import { store } from "./store";

import Navbar from "./layout/Navbar";
import Routes from "./routes";

const App: React.FunctionComponent = () => {
  // const recipies = recipie.map((rec) => (
  //   <RecipieCard
  //     key={Math.random()}
  //     photo={rec.photo}
  //     duration={rec.duration}
  //     servings={rec.servings}
  //     description={rec.description}
  //     name={rec.name}
  //     ingredients={rec.ingredients}
  //     steps={rec.steps}
  //   />
  // ));

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

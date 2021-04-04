import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/index";

import risotto from "./assets/img/risotto.jpg";

import RecipieCard from "./components/RecipieCard/index";

const recipie = [
  {
    photo: risotto,
    name: "Risotto de vinho tinto",
    duration: 50,
    servings: 4,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    level: "easy",
    stars: 4,
    ingredients: [
      "1 c. de sopa azeite",
      "50 gr cebola picada",
      "30 gr aipo (talo)",
      "200 gr arroz para risotto",
      "200 ml vinho tinto",
      "1 caldo de legumes sem sal",
      "750 ml água",
      "1 c. de chá sal",
      "25 gr parmesão ralado",
      "2 c. de sopa cebolinho picado",
    ],
    steps: [
      "Aqueça o azeite num tacho, junte a cebola descascada e picada, o talo de aipo cortado em lâminas finas e cozinhe sobre lume moderado até a cebola começar a alourar.",
      "Junte o arroz e frite durante 1 minuto, mexendo sempre. Refresque com o vinho tinto e deixe cozinhar, mexendo, até o arroz absorver o vinho.",
      "Entretanto, dilua o caldo escolhido em água quente, junte o sal e vá acrescentando ao arroz a pouco e pouco e sem parar de mexer. O arroz demora cerca de 25 minutos a cozer e deve ficar cremoso.",
      "Junte o queijo parmesão e o cebolinho, envolva bem e sirva de imediato como acompanhamento de carnes assadas ou peito de pato.",
    ],
  },
];

const App: React.FunctionComponent = () => {
  const recipies = recipie.map((rec) => (
    <RecipieCard
      key={Math.random()}
      photo={rec.photo}
      duration={rec.duration}
      servings={rec.servings}
      description={rec.description}
      name={rec.name}
      ingredients={rec.ingredients}
      steps={rec.steps}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "16px",
        }}
      >
        {recipies}
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

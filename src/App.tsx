import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/index";

import risotto from "./assets/img/risotto.jpg";
import suspiros from "./assets/img/suspiros.jpeg";

import RecipieCard from "./components/RecipieCard";

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
  {
    photo: suspiros,
    name: "Suspiros de avelã",
    duration: 60,
    servings: 18,
    description:
      "De origem europeia, o suspiro foi ganhando fãs ao longo do tempo. De confecção fácil, e muito versátil quando combinado com outros ingredientes. Esta versão com avelã é incrivelmente saborosa.",
    level: "easy",
    stars: 2,
    ingredients: [
      "4 c. de sopa creme para barrar de cacau e avelãs",
      "3 claras L",
      "150 g açúcar fino",
      "1 c. de sopa amido de milho ",
      "¼ c. de café sal",
      "150 g avelãs picadas",
    ],
    steps: [
      "Pré-aqueça o forno a 150 °C.",
      "Forre dois tabuleiros de forno com papel vegetal.",
      "Coloque o creme de avelãs numa taça e leve ao microondas por 30 segundos até que fique derretido.",
      "Bata as claras com a ajuda da batedeira até ficarem fofas. Vá adicionando aos poucos o açúcar até obter picos.",
      "Envolva o amido de milho e o sal.",
      "Por último, junte o creme de avelãs derretido e as avelãs picadas e envolva levemente.",
      "Distribua o preparado pelos dois tabuleiros fazendo pequenos montes, com uma separação de alguns centímetros.",
      "Leve ao forno por 20 a 25 minutos, desligue e deixe arrefecer dentro do forno com a porta fechada até perfazer a hora. Decore a gosto.",
    ],
  },
];

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

  const recipies = recipie.map((rec) => (
    <RecipieCard
      key={Math.random()}
      photo={rec.photo}
      name={rec.name}
      stars={rec.stars}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(0, 300px))",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "16px",
        }}
      >
        {recipies}
      </ul>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

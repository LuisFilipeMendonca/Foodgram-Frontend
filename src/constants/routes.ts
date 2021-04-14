import React from "react";

import HomePage from "../pages/home";
import FavoritesPage from "../pages/favorites";
import MyRecipiesPage from "../pages/recipies";
import RecipiePage from "../pages/recipie";
import AuthPage from "../pages/auth";

type RouteType = {
  id: number;
  path: string;
  label?: String;
  component?: React.FC;
  isExact: boolean;
};

const routes: RouteType[] = [
  {
    id: 1,
    path: "/",
    label: "Recipies",
    component: HomePage,
    isExact: true,
  },
  {
    id: 2,
    path: "/favorites",
    label: "Favorites",
    component: FavoritesPage,
    isExact: true,
  },
  {
    id: 3,
    path: "/my_recipies",
    label: "My Recipies",
    component: MyRecipiesPage,
    isExact: true,
  },
  // {
  //   id: 4,
  //   path: "/add_recipie",
  // },
  {
    id: 5,
    path: "/login",
    component: AuthPage,
    isExact: true,
  },
  // {
  //   id: 6,
  //   path: "/register",
  // },
  {
    id: 7,
    path: "/recipie/:id",
    component: RecipiePage,
    isExact: true,
  },
];

export default routes;

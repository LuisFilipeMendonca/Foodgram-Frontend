import React from "react";

import HomePage from "../pages/home";
import FavoritesPage from "../pages/favorites";
import MyRecipiesPage from "../pages/recipies";
import RecipiePage from "../pages/recipie";
import AuthPage from "../pages/auth";
import ForgotPasswordPage from "../pages/forgotPassword";

type RouteType = {
  id: number;
  path: string;
  label?: String;
  component: React.ComponentType;
  isExact: boolean;
  isClosed: boolean;
};

const routes: RouteType[] = [
  {
    id: 2,
    path: "/favorites",
    label: "Favorites",
    component: FavoritesPage,
    isExact: true,
    isClosed: true,
  },
  {
    id: 3,
    path: "/my_recipies",
    label: "My Recipies",
    component: MyRecipiesPage,
    isExact: true,
    isClosed: true,
  },
  {
    id: 4,
    path: "/login",
    component: AuthPage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 5,
    path: "/forgot_password",
    component: ForgotPasswordPage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 6,
    path: "/recipie/:id",
    component: RecipiePage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 1,
    path: "/",
    label: "Recipies",
    component: HomePage,
    isExact: true,
    isClosed: false,
  },
];

export default routes;

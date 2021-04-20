import React from "react";

import HomePage from "../pages/home";
import FavoritesPage from "../pages/favorites";
import MyRecipiesPage from "../pages/myRecipies";
import RecipiePage from "../pages/recipie";
import AuthPage from "../pages/auth";
import ForgotPasswordPage from "../pages/forgotPassword";
import ResetPasswordPage from "../pages/resetPassword";
import AddRecipiePage from "../pages/addRecipie";

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
    id: 8,
    path: "/my_recipies/add",
    component: AddRecipiePage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 9,
    path: "/my_recipies/edit/:id",
    component: AddRecipiePage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 3,
    path: "/my_recipies",
    label: "My Recipies",
    component: MyRecipiesPage,
    isExact: false,
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
    path: "/reset_password/:token",
    component: ResetPasswordPage,
    isExact: true,
    isClosed: false,
  },
  {
    id: 7,
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

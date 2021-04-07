type RouteType = {
  path: string;
  label: String;
};

const routes: RouteType[] = [
  {
    path: "/",
    label: "Recipies",
  },
  {
    path: "/favorites",
    label: "Favorites",
  },
  {
    path: "my_recipies",
    label: "My Recipies",
  },
];

export default routes;

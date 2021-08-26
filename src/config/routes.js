import React from "react";
import paths from "../constants/paths";
import { Introduction, Movies, Planets, Starships } from "../views";

export const routes = [
  {
    path: paths.HOME,
    exact: true,
    title: () => "Introduction",
    view: () => <Introduction />,
    onlyAuthorized: false,
  },
  {
    path: paths.MOVIES,
    exact: true,
    title: () => "Movies",
    view: () => <Movies />,
    onlyAuthorized: false,
  },
  {
    path: paths.PLANETS,
    exact: true,
    title: () => "Planets",
    view: () => <Planets />,
    onlyAuthorized: false,
  },
  {
    path: paths.STARSHIPS,
    exact: true,
    title: () => "Sarships",
    view: () => <Starships />,
    onlyAuthorized: false,
  },
];

export default routes;

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/logo.jpg";
import paths from "../../constants/paths";

export default function Navbar() {
  return (
    <div className={"title"}>
      <Link className={"title__logo__link"} to={paths.HOME}>
        <img className={"title__logo"} src={image} alt={"star wars logo"} />
      </Link>
      <Link className={"title__link"} to={paths.MOVIES}>
        Movies
      </Link>
      <Link className={"title__link"} to={paths.PLANETS}>
        Planets
      </Link>
      <Link className={"title__link"} to={paths.STARSHIPS}>
        Starships
      </Link>
    </div>
  );
}

import React from "react";
import "./navbar.css";
import image from "../../assets/logo.jpg";

export default function Navbar () {
    return(
        <div className={"title"}>
            <a className={"title__logo__link"} href={"http://localhost:3000/"}>
                <img className={"title__logo"} src={image} alt={"star wars logo"}/>
            </a>
            <a className={"title__link"} href="http://localhost:3000/movies">Movies</a>
            <a className={"title__link"} href={"http://localhost:3000/planets"}>Planets</a>
            <a className={"title__link"} href={"http://localhost:3000/starships"}>Starships</a>
        </div>
    )
}
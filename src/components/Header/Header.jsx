import React from "react";
import "./title.css";
import image from "../../assets/logo.jpg";

export default function Header () {
    return(
        <div className={"title"}>
            <a className={"title-logo-link"} href={"http://localhost:3000/"}><img className={"title-logo"} src={image} alt={"star wars logo"}/></a>
            <a className={"title-link"} href="http://localhost:3000/movies">Movies</a>
            <a className={"title-link"} href={"http://localhost:3000/planets"}>Planets</a>
            <a className={"title-link"} href={"http://localhost:3000/starships"}>Starships</a>
        </div>
    )
}
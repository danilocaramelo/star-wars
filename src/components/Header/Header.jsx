import React from "react";
import "./title.css";
import image from "../../assets/logo.jpg";

export default function Header () {
    return(
        <div className={"title"}>
            <img className={"title-logo"} src={image} alt={"star wars logo"}/>
            <a className={"title-link"} href="http://localhost:3000/">Movies</a>
            <a className={"title-link"} href={"http://localhost:3000/planets"}>Planets</a>
            <a className={"title-link"} href={"http://localhost:3000/starships"}>Starships</a>
        </div>
    )
}
import React from "react";
import "./title.css";
import image from "../../assets/logo.jpg";

export default function Title () {
    return(
        <div className={"title-container"}>
            <img className={"title-logo"} src={image}/>
            <a className={"title-link"} href="http://localhost:3000/">Movies</a>
            <a className={"title-link"} href={"http://localhost:3000/planets"}>Planets</a>
            <a className={"title-link"} href={"http://localhost:3000/planets"}>Spaceships</a>
        </div>
    )
}
import React from "react";
import "./planetcard.css";

export default function PlanetCard(props) {

    return(
        <div className={props.value.className}>
            <img
                className={"planetcard__image"}
                src={props.value.image}
                alt={props.value.name + ", star wars planet"}
            />
            <div className={"planetcard__information"}>
                <h1 className={"planetcard__title"}>{props.value.name}</h1>
                <p className={"planetcard__text"}>Climate: {props.value.climate}</p>
                <p className={"planetcard__text"}>Diameter: {props.value.diameter}</p>
                <p className={"planetcard__text"}>Gravity: {props.value.gravity}</p>
            </div>
        </div>
    )
}
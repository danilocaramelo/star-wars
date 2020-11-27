import React from "react";
import "./planetcard.css";

export default function PlanetCard(props) {

    return(
        <div className={props.value.className}>
            <img
                className={"planetcard-image"}
                src={props.value.image}
                alt={props.value.name + ", star wars planet"}
            />
            <div className={"planetcard-information"}>
                <h1 className={"planetcard-title"}>{props.value.name}</h1>
                <p className={"planetcard-text"}>Climate: {props.value.climate}</p>
                <p className={"planetcard-text"}>Diameter: {props.value.diameter}</p>
                <p className={"planetcard-text"}>Gravity: {props.value.gravity}</p>
            </div>
        </div>
    )
}
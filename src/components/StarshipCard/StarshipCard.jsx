import React from "react";

export default function StarshipCard(props) {

    return(
        <>
            <h1>{props.starship.name}</h1>
            <p>Passengers: {props.starship.passengers}</p>
            <p>Manufacter: {props.starship.manufacturer}</p>
            <p>Max Atmosphering Speed{props.starship.max_atmosphering_speed}</p>
        </>
    )
}
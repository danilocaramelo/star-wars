import React from "react";
import starImage from "../../assets/star.svg";
import warsImage from "../../assets/wars.svg";
import "./animation.css";

export default function Animation() {
    return(
        <div className="starwars-demo">
            <img src={starImage} alt="Star" className="star"/>
            <img src={warsImage} alt="Wars" className="wars"/>
            <h2 className="byline" id="byline">May The Force Be With You</h2>
        </div>
    )
}
import React from "react";
import starImage from "../../assets/star.svg";
import warsImage from "../../assets/wars.svg";
import "./introduction.css";

export default function Introduction() {
    return(
        <div className="starwars-demo">
            <img src={starImage} alt="Star" className="star"/>
            <img src={warsImage} alt="Wars" className="wars"/>
            <h2 className="byline" id="byline">The Force Awakens</h2>
        </div>
    )
}
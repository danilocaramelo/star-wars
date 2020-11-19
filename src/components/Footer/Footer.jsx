import React from "react";
import "./footer.css";
import darthIcon from "../../assets/darthIcon.png";

export default function Footer() {
    return (
        <footer className={"footer"}>
            <img className={"footer-icon"} src={darthIcon}/>
        </footer>
    )
}
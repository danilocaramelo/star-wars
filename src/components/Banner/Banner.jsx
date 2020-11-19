import React from "react";
import "./banner.css";
import Introduction from "../Introduction/Introduction";

export default function Banner () {
    return(
        <section className={"banner-container"}>
            <div>
                <Introduction className={"banner-introduction"}/>
            </div>
        </section>
    )
}
import React from "react";
import "./planetslist.css";
import PlanetCard from "../PlanetCard/PlanetCard";
import { getPlanets } from "../../api/api";

import tatooine from "../../assets/planets/Tatooine.jpg";
import alderaan from "../../assets/planets/Alderaan.jpeg";
import yarvin from "../../assets/planets/Yarvin.webp";
import bespin from "../../assets/planets/bespin.webp";
import endor from "../../assets/planets/endor.jpg";
import naboo from "../../assets/planets/naboo.webp";
import coruscant from "../../assets/planets/coruscant.jpg";
import hoth from "../../assets/planets/hoth.webp";
import kamino from "../../assets/planets/kamino.jpg";
import dagobah from "../../assets/planets/Dagobah.webp";
import starship1 from "../../assets/starship1.jpg";


export default class PlanetsList extends React.Component{
    state = {
        planets: [],
    }

    async componentDidMount() {
        const planets = await getPlanets();
        const images = [tatooine, alderaan, yarvin, bespin, endor, naboo,
            coruscant, hoth, kamino, dagobah]
        const classNames = ["tatoine", "alderaan", "yarvin", "hoth", "dagobah",
        "bespin", "endor", "naboo", "coruscant", "kamino"]
        planets.forEach((planet, index) => {planet.image = images[index]});
        planets.forEach((planet, index) => {planet.className = classNames[index]});
        this.setState({planets});
    }

    render() {
        return(
            <section elevation={3} className={"planetslist"}>
                {this.state.planets.map((planet, index) => <PlanetCard key={index} value={planet}/>)}
                <img
                    src={starship1}
                    className={"planetslist-image__starship"}
                    alt={"star wars ship"}
                />
            </section>
        )
    }
}
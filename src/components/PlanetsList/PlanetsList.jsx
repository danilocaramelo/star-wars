import React from "react";
import "./planetslist.css";
import PlanetCard from "../PlanetCard/PlanetCard";
import { getPlanets } from "../../api/api";

import starship1 from "../../assets/starship1.jpg";
import {connect} from "react-redux";


class PlanetsList extends React.Component{
    state = {
        planets: [],
    }

    async componentDidMount() {
        const planets = await getPlanets();
        const images = this.props.planets.planets;
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

const mapStateToProps = store => ({
    planets: store.planetsPictures.planets
})

export default connect(mapStateToProps)(PlanetsList);
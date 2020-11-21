import React from 'react';
import FilmCard from "../FilmCard/FilmCard";
import "./film-list.css";
import hope from "../../assets/movies/a_new_hope.png";
import empire from "../../assets/movies/the_empire_strikes_back.jpg";
import jedi from "../../assets/movies/return_of_the_jedi.png";
import phantom from "../../assets/movies/phantom_menace.jpeg";
import attack from "../../assets/movies/attack_of_the_clones.jpg";
import revenge from "../../assets/movies/revenge_of_the_sith.jpeg";
import {getMovies} from "../../api/api";

export default class FilmList extends React.Component {
    state = {
        films: [],
    }

   async componentDidMount() {
        const films = await getMovies();
        const images = [hope, empire, jedi, phantom, attack, revenge]
        films.forEach((film, index) => {film.image = images[index]});
        this.setState({films});
    }

    render() {
        return(
            <section className={"filmlist"}>
                {this.state.films.map(film => <FilmCard key={film.episode_id} value={film}/>)}
            </section>
        )
    }
}
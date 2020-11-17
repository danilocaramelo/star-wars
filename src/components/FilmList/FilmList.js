import React from 'react';
import axios from 'axios';
import FilmCard from "../FilmCard/FilmCard";
import {Container} from "@material-ui/core";

export default class FilmList extends React.Component {
    state = {
        films: []
    }

    componentDidMount() {
        axios.get('https://swapi.dev/api/films/')
            .then(res => {
                const films = res.data.results;
                this.setState({films});
            })
    }

    render() {
        return(
            <Container maxWidth={'xl'}>
                <h1>Filmes Star Wars</h1>
                <section>
                    {this.state.films.map(film => <FilmCard key={film.episode_id} value={film}/>)}
                </section>
            </Container>
        )
    }
}

//<li key={film.episode_id}>{film.title}</li>
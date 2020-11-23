import React from 'react';
import FilmCard from "../FilmCard/FilmCard";
import "./film-list.css";
import {getMovies} from "../../api/api";
import {connect} from "react-redux";

class FilmList extends React.Component {
    state = {
        films: [],
    }

   async componentDidMount() {
        const films = await getMovies();
        const images = this.props.movies.movies;
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

const mapStateToProps = store => ({
    movies: store.movieList.movies
})

export default connect(mapStateToProps)(FilmList);
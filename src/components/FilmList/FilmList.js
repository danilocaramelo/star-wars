import React from 'react';
import FilmCard from "../FilmCard/FilmCard";
import "./film-list.css";
import {getMovies} from "../../api/api";
import {connect} from "react-redux";
import FilmBanner from "../FilmBanner/FilmBanner";

class FilmList extends React.Component {

    state = {
        films: [],
        selectedFilm: {},
    }

   async componentDidMount() {
       const films = await getMovies();
       const images = this.props.movies.movies;
       films.forEach((film, index) => {
           film.image = images[index]
       });
       this.setState({films: films, selectedFilm: films[0]});
   }

   onCardClick(value) {
        this.setState({selectedFilm: value})
   }


    render() {

        return(
            <section className={"filmlist-grid"}>
                <FilmBanner className={"filmlist-banner"} value={this.state.selectedFilm}/>
                <section className={"filmlist"}>
                    {this.state.films.map(film =>
                        <FilmCard
                            key={film.episode_id}
                            value={film}
                            callBack={(value) => this.onCardClick.bind(this, value)}
                            className={"filmlist-filmcard"}
                        />
                        )}
                </section>
            </section>
        )
    }

}

const mapStateToProps = store => ({
    movies: store.movieList.movies
})

export default connect(mapStateToProps)(FilmList);
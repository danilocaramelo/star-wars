import hope from "../../assets/movies/a_new_hope.png";
import empire from "../../assets/movies/the_empire_strikes_back.jpg";
import jedi from "../../assets/movies/return_of_the_jedi.png";
import phantom from "../../assets/movies/phantom_menace.jpeg";
import attack from "../../assets/movies/attack_of_the_clones.jpg";
import revenge from "../../assets/movies/revenge_of_the_sith.jpeg";
import {MOVIE_LIST} from "../actions/actionTypes";

const initialState = {
    movies: [hope, empire, jedi, phantom, attack, revenge]
}

export const movieList = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_LIST:
            return {
                movies: state
            };
        default:
            return {
                movies: state
            };
    }
}
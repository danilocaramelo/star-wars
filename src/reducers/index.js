import {combineReducers} from "redux";
import {movieList} from "./movieList";

export const Reducers = combineReducers({
    movieList: movieList
})
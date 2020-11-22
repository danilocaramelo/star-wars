import {combineReducers} from "redux";
import {movieList} from "./movieList";
import {planetsPictures} from "./planetsPictures";

export const Reducers = combineReducers({
    movieList: movieList,
    planetsPictures: planetsPictures
})
import axios from 'axios';

export const getMovies = () => {
    return axios.get('https://swapi.dev/api/films/')
        .then(res => {
            return res.data.results;
        })
        .catch(erro => console.log(erro))
}

export const getPlanets = () => {
    return axios.get('https://swapi.dev/api/planets')
        .then(res => {
            return res.data.results;
        })
        .catch(erro => console.log(erro))
}

export default {getPlanets, getMovies}
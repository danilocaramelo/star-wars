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

export const searchStarships = (search) => {
    return axios.get(`https://swapi.dev/api/starships/?search=${search}`)
        .then(res => {
            return res.data.results;
        })
        .catch(erro => console.log(erro))
}

export default {getPlanets, getMovies, searchStarships}
import axios from "axios";
import {apiKey, baseUrl, urls} from "../constants/urls";

const axiosMovie = axios.create({
    baseURL: baseUrl,
    // params:{     //TODO make query works!
    //     api_key: apiKey
    // }

})

const apiTestKey = '?api_key=c0063193502a8410c34f84413f097628';
const movieService = {  //TODO get off apiKeyTest
    getMovieByPage: (pageNumber) => axiosMovie.get(urls.discover + apiTestKey + `&page=${pageNumber}`).then(value => value.data),
    getMovieByPageAndGenres: (pageNumber, genresArray) => axiosMovie.get(urls.discover + apiTestKey + `&page=${pageNumber}` + `&with_genres=${genresArray}`).then(value => value.data),
    getMovieById: (movieId) => axiosMovie.get(urls.movie + movieId + apiTestKey).then(value => value.data),
    getGenre: () => axiosMovie.get(urls.genre + apiTestKey).then(value => value.data),
}

export {
    movieService
}
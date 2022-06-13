import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer} from "./slices/genre.slice";
import {movieReducer} from "./slices/movie.slice";

const rootReducer = combineReducers({
    genreData: genreReducer,
    movieData: movieReducer
});

const store = configureStore({
    reducer: rootReducer
})

export {store}
import {createSlice} from "@reduxjs/toolkit";

let initState = {moviesList:[], currentPage: 1, maxPage:null}

let movieSlice = createSlice({
    name: 'movieName',
    initialState: initState,
    reducers: {
        setMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setMaxPage: (state, action) => {
            state.maxPage = action.payload;
        },
    }
})

const {reducer: movieReducer, actions:{setMoviesList, setCurrentPage, setMaxPage}} = movieSlice;
const movieActions = {setMoviesList, setCurrentPage, setMaxPage};
export {movieActions, movieReducer}
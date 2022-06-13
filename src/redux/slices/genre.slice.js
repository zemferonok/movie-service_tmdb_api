import {createSlice} from "@reduxjs/toolkit";

let initState = {genresList: [], chosenGenres:[]}

let genreSlice = createSlice({
    name: 'genreName',
    initialState: initState,
    reducers: {
        setGenresList: (state, action) => {
            state.genresList = action.payload;
        },
        setChosenGenres: (state, action) => {
            state.chosenGenres = action.payload;
        },
        addToChosenGenres: (state, action) => {
            state.chosenGenres.push(action.payload);
        },
        removeFromChosenGenres: (state, action) => {
            state.chosenGenres.filter(value => value!==action.payload);
        },
    }
})

const {reducer: genreReducer, actions:{setGenresList,addToChosenGenres,removeFromChosenGenres,setChosenGenres}} = genreSlice;
const genreActions = {setGenresList,addToChosenGenres,removeFromChosenGenres,setChosenGenres};
export {genreActions, genreReducer}
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieService} from "../../services/movie.service";
import {genreActions} from "../../redux/slices/genre.slice";
import {GenreCard} from "../GenreCard/GenreCard";


const GenreCardList = () => {

    let {genresList} = useSelector((state) => state.genreData)
    let dispatch = useDispatch();

    useEffect(() => {
        let fetchGenre = async () => {
            let data = await movieService.getGenre();
            let {genres} = data;
            console.log('Load Genres..',data)
            dispatch(genreActions.setGenresList(genres));
        }
        fetchGenre().catch(console.error);
    }, [])


    return (
        <div>
            _GenreCardList_
            {
                genresList.map(value => <GenreCard key={value.id} value={value}/>)
            }
        </div>
    );
};

// export default GenreCardList;
export {GenreCardList};
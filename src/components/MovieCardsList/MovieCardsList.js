import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieService} from "../../services/movie.service";
import {movieActions} from "../../redux/slices/movie.slice";
import {MovieCard} from "../MovieCard/MovieCard";
import css from './MovieCardsList.module.css'


const MovieCardsList = () => {

    let {moviesList, currentPage} = useSelector((state) => state.movieData)
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.setCurrentPage(1))
    }, []);

    useEffect(() => {
        // movieService.getMovieByPage(currentPage).then((value) => {
        //     console.log('Load Movies..', value);
        //     dispatch(movieActions.setMoviesList(value.results));
        //     dispatch(movieActions.setMaxPage(value.total_pages));
        // })

        let fetchMovie = async () => {
            let data = await movieService.getMovieByPage(currentPage);
            let {results, total_pages} = data;
            console.log('Load Movies..',data)
            dispatch(movieActions.setMoviesList(results));
            dispatch(movieActions.setMaxPage(total_pages));
        }
        fetchMovie().catch(console.error);
    }, [currentPage])

    return (
        <div className={css.cardList}>
            {moviesList.map(value => <MovieCard key={value.id} value={value}/>)}
        </div>
    );
};

export {MovieCardsList};
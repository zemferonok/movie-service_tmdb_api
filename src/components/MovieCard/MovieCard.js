import React from 'react';
import {imgUrl} from "../../constants/urls";
import css from './MovieCard.module.css'
import {useNavigate} from "react-router-dom";

const MovieCard = ({value, value: {adult, id, overview, title, poster_path}}) => {

    let navigate = useNavigate();
    let goToFilmDetails = () => {
        navigate(id.toString());
    }

    return (
        <div className={css.card} onClick={goToFilmDetails}>
            <div>ID: {id} - Adult: {JSON.stringify(adult)}</div>
            <img src={imgUrl + poster_path} alt={title} width={'100%'}/>
            <div className={css.title}>{title}</div>
            {/*<div className={css.overview}>{overview}</div>*/}
        </div>
    );
};

// export default MovieCard;
export {MovieCard};
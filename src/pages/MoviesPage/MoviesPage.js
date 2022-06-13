import React from 'react';
import {MovieCardsList} from "../../components/MovieCardsList/MovieCardsList";
import {PageSwitcher} from "../../components/PageSwitcher/PageSwitcher";

const MoviesPage = () => {

    return (
        <div>
            _movies_page_
            <PageSwitcher/>
            <MovieCardsList/>
        </div>
    );
};

// export default FilmPage;
export {MoviesPage};
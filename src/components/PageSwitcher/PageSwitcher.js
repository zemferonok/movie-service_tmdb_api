import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";

const PageSwitcher = () => {

    let {currentPage, maxPage} = useSelector(state => state.movieData)
    let dispatch = useDispatch();

    let decrement = () => {
        if (currentPage > 1) {
            dispatch(movieActions.setCurrentPage(currentPage - 1))
        } else {
            console.log('The page is min')
        }
    }

    let increment = () => {
        if (currentPage < maxPage) {
            dispatch(movieActions.setCurrentPage(currentPage + 1));
            console.log(currentPage + '>>' + maxPage);
        } else {
            console.log('The page is max')
        }
    }



    return (
        <div>
            <button onClick={decrement}>Decrement</button>
            <button>{currentPage}</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

// export default PageSwitcher;
export {PageSwitcher};
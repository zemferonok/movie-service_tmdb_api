import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <div>//TODO Login</div>
                <div>//TODO NightMode</div>
                <NavLink to='/'>To Home</NavLink>
            </div>
            <div className={css.header}>
                <NavLink to="movies">Movies</NavLink>  {/* Like LINK, add class 'active' */}
                <NavLink to="genres">Genres</NavLink>
                <div>//TODO Search</div>
            </div>
        </div>
    );
};

// export default Header;
export {Header};
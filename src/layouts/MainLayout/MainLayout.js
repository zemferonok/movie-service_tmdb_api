import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            _main_layout
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

// export default MainLayout;
export {MainLayout};
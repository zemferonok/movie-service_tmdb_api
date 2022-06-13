import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {SingleMoviePage} from "./pages/SingleMoviePage/SingleMoviePage";
import {GenresPage} from "./pages/GenresPage/GenresPage";
import {MainPage} from "./pages/MainPage/MainPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Navigate to={"main"}/>}/>
                    <Route path="main" element={<MainPage/>}/>
                    <Route path="movies/:movieId" element={<SingleMoviePage/>}/>
                    <Route path="movies" element={<MoviesPage/>}/>
                    <Route path="genres" element={<GenresPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

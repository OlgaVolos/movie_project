import React from 'react';
import {Outlet} from "react-router-dom";

import {MovieListCards} from "../../components";

const MoviesPage = () => {

    return (
        <div>
            <MovieListCards />
            <Outlet/>
        </div>
    );
}

export {MoviesPage};

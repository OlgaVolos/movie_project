import React from 'react';
import {urls} from "../../constants";
import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";

const MovieListCard = ({movie}) => {

    return (
        <div className={css.card}>
            <Link to={`/movie/${movie.id}`} state={movie}>
                <img src={`${urls.imageW200}/${movie.backdrop_path}`} alt={movie.title}/>
                <div className={css.txt_center}>
                    <h4>{movie.original_title}</h4>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};

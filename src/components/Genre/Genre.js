import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Genre.module.css'

const Genre = ({genre: {name, id}}) => {
    const {page} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams();

    const movieListWithGenre = () => {
        setQuery({page: `${page}`, with_genres: `${id}`});
    }

    return (
        <div>
            <button onClick={movieListWithGenre} className={css.genre_btn}>{name}</button>
        </div>
    );
};

export {Genre};

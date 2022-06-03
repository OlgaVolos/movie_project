import React from 'react';

import css from './Genre.module.css'
import {useSearchParams} from "react-router-dom";

const Genre = ({genre:{name, id}}) => {
    const [query, setQuery] = useSearchParams({page:'1', with_genres:''});
    const page = query.get('page')

    const movieListWithGenre = () => {
        setQuery({page, with_genres: `${id}`})
    }

    return (
        <div>
                <button onClick={movieListWithGenre} className={css.genre_btn}>{name}</button>

        </div>
    );
};

export {Genre};

import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {urls} from "../../constants";
import css from './MovieListCard.module.css';
import {Title} from "../../styles";

const MovieListCard = ({movie}) => {
    const {theme} = useSelector(state => state.theme);

    const {id, title, original_title, backdrop_path} = movie

    return (
        <div className={css.card}>
            <Link to={`/movie/${id}`} state={movie}>
                <img src={backdrop_path && `${urls.imageW200}/${backdrop_path}`} alt={title}/>
                <Title theme={theme}>
                    <h4>{original_title}</h4>
                </Title>
            </Link>
        </div>
    );
};

export {MovieListCard};

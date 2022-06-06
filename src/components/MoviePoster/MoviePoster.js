import React from 'react';
import {Rating} from "react-simple-star-rating";

import {urls} from "../../constants";
import css from './MoviePoster.module.css'

const MoviePoster = ({movie}) => {


    const {original_title, overview, title, vote_average, vote_count, poster_path, release_date} = movie;


    return (
        <div style={{display: 'flex'}}>
            <div><img style={{width: '80%'}} src={`${urls.imageOriginal}/${poster_path}`} alt=""/></div>
            <div>
                <div className={css.text_wrap}><h1>{title}</h1>
                    <h4>Original title: {original_title}</h4>
                    <div>{overview}</div>
                    <p>{release_date}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <Rating initialValue={vote_average / 2} iconsCount={5}/> <h3>{vote_count}</h3>
                </div>
            </div>
        </div>
    );
};

export {MoviePoster};

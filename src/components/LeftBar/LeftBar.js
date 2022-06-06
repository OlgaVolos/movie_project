import React from 'react';

import {GenreList} from "../GenreList/GenreList";
import css from './LeftBar.module.css';

const LeftBar = () => {
    return (
        <div className={css.leftBar}>
            <GenreList/>
        </div>
    );
};

export {LeftBar};

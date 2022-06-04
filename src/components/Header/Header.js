import React from 'react';

import css from './Header.module.css'
import {Search} from "../Search/Search";
import {UserLogo} from "../UserLogo/UserLogo";

const Header = () => {
    return (
        <div className={css.header}>
            <Search/>
            <UserLogo/>
        </div>
    );
};

export {Header};

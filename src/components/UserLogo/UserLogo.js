import React from 'react';

import css from './UserLogo.module.css'
const UserLogo = () => {
    return (
        <div className={css.user_wrap}>
            <div className={css.user}>Welcome, Olya!</div>
            <div className={css.logo}>OV</div>
        </div>
    );
};

export {UserLogo};

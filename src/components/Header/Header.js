import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Switch} from "@mui/material";

import {Search} from "../Search/Search";
import {UserLogo} from "../UserLogo/UserLogo";
import {themeActions} from "../../redux/slices/theme.slice";

import css from './Header.module.css'
import {HeaderWrapper} from "../../styles";

const Header = () => {

    const {theme} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(themeActions.toggleTheme(!theme));
        localStorage.setItem('theme', !theme)
    }
    return (
        <HeaderWrapper theme={theme}>
            <Link to={'/'}>
                <button className={css.header_btn}>All movies</button>
            </Link>
            <Switch  defaultChecked color="secondary" onChange={changeTheme} />
            <Search/>
            <UserLogo/>
        </HeaderWrapper>
    );
};

export {Header};

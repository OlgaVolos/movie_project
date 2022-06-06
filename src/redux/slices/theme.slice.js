import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    theme: JSON.parse(localStorage.getItem('theme')) || false
};
const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
    toggleTheme:(state)=> {
        state.theme = !state.theme
    }}
});

const {reducer: themeReducer, actions: {toggleTheme}} = themeSlice;

const themeActions = {
    toggleTheme
};

export {
    themeReducer,
    themeActions
}

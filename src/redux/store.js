import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";
import {themeReducer} from "./slices/theme.slice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    theme: themeReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

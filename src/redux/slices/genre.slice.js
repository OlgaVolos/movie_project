import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genreList: [],
    page: 1,
    searchGenres: [],
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenreList',
    async () => {
        const {data} = await genreService.getGenreList();
        return data
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        searchGenreIds: (state, action) => {
            const {searchGenres} = state.genres
            return {
                ...state,
                searchGenres:
                state.searchGenres.includes(action.payload)?
                    searchGenres.filter(genreId => genreId !== action.payload) :
                    [...searchGenres, action.payload]
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genreList = genres
            })
    }
});

const {reducer: genreReducer, actions: {searchGenreIds}} = genreSlice;

const genreActions = {
    getGenres,
    searchGenreIds
};

export {
    genreReducer,
    genreActions
}


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState ={
    genreList:[],
    page:null,
    with_genres: null
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
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genreList = genres
            })
    }
});

const {reducer: genreReducer, actions:{}} = genreSlice;

const genreActions = {
getGenres
};

export {
    genreReducer,
    genreActions
}


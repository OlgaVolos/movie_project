import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    page: 1,
    movies: [],
    id: null,
    with_genres: null,
    search: ''
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
);

const getMovie = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}) => {
        const {data} = await movieService.getMovieById(id);
        return data
    }

);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({page, with_genres}) => {
        const {data} = await movieService.getMoviesWithGenre(page, with_genres);
        return data
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({ page, search}) => {
        const {data} = await movieService.searchMovieByTitle(page, search);
        return data
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMoviePage: (state, action) => {
           const {page} = action.payload
            return {
               ...state, page
            }
        },
        setMovieSearch: (state, action) => {
            state.search = action.payload;
            state.page = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action)=> {
                const {page, results} = action.payload;

                state.page = page;
                state.movies = results;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                const {id} = action.payload;
                state.id = id;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {page, genres, with_genres, results} = action.payload;

                state.page = page;
                state.with_genres = with_genres
                state.genres = genres
                state.movies = results;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                const {search, results, page} = action.payload;
                state.search = search;
                state.movies = results;
                state.page = page
            })
    }
});

const {reducer: movieReducer, actions:{setMoviePage, setMovieSearch}} = movieSlice;

const movieActions ={
    getAllMovies,
    getMovie,
    getMoviesByGenre,
    setMoviePage,
    searchMovie,
    setMovieSearch
};

export{
    movieReducer,
    movieActions
}

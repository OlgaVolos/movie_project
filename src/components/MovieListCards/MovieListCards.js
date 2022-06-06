import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {LeftBar} from "../LeftBar/LeftBar";
import {CardsWrapper, PageWrapper, PageButton, PagesBlock} from "../../styles";

const MovieListCards = () => {
    const {
        movies: {movies},
        theme: {theme}
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const with_genres = query.get('with_genres');

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({page, with_genres}))
    }, [page, with_genres, dispatch])

    const prevPage = () => {
        const prevPage = +page - 1;
        if (prevPage >= 1) {
            if (query.has('with_genres')) {
                setQuery({page: `${prevPage}`, with_genres})
            } else {
            setQuery({page: `${prevPage}`});
            }
        }
    };

    const nextPage = () => {
       const nextPage = +page + 1;

        if (nextPage <= 500) {
            if (query.has('with_genres')) {
                setQuery({page: `${nextPage}`, with_genres})
            }else {
            setQuery({page: `${nextPage}`})
            }
        }
        console.log(nextPage);
    }

    return (
        <PageWrapper theme={theme}>
            <LeftBar/>
                <CardsWrapper>
                    {movies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
                    <PagesBlock>
                    <PageButton onClick={prevPage}>Prev page</PageButton>
                    <h2>{page}</h2>
                    <PageButton onClick={nextPage}>Next Page</PageButton>
                </PagesBlock>
                </CardsWrapper>
        </PageWrapper>
    );
};

export {MovieListCards};

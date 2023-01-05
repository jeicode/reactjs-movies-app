import { useContext, useEffect, useState } from "react";
import {MoviesContext} from "context/MoviesContext";
import { GetMovieDetail, GetMovies, GetVideosMovies } from "services/MoviesServices";


export function useMovies({category}){
    const {movies, setMovies, loading, setLoading, page} = useContext(MoviesContext);
    useEffect(() => {
        setLoading(true);
        async function getMovies() {
            const { results } = await GetMovies({ category, page })
            if (page !== 1 ) setMovies(values => [... new Set(values.concat(results))])
            else setMovies(results);
            setLoading(false);
        }
        getMovies()

    }, [category, page])


    return {movies, loading}

}



export function useMoviesDetail({idMovie}){
    const { movies } = useContext(MoviesContext);
    const [movie, setMovie] = useState({});
    let movieContext = movies.find(m => m?.id == idMovie);

    useEffect(() => {
        async function getMovie() {
            const movie =  movieContext ? movieContext : await GetMovieDetail({ idMovie })
            const { results } = await GetVideosMovies({ idMovie })
            movie['key'] = results[0]['key']
            setMovie(movie)
        }
        getMovie()

    }, [idMovie])


    return {movie, setMovie}


}





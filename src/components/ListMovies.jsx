import React, { useContext, useEffect } from "react"
import '../App.css'
import { useMovies } from "../hooks/useMovies"
import Loader from "./Loader/Loader"
import { MoviesContext } from "context/MoviesContext"
import useElementIsIntersecting from "hooks/useElementIsIntersecting"
import ItemMovie from "./ItemMovie"


function ListMovies(params) {
    const category = params.params?.category || params?.category
    const { movies, loading } = useMovies({ category })
    const { setPage } = useContext(MoviesContext);
    const { show: nextPage, eleRef } = useElementIsIntersecting({ autoDisconnect: false })

    useEffect(() => {
        nextPage && setPage(value => value + 1);
    }, [setPage, nextPage])

    return (
        <>
            <h2>{params.title || 'Categorias: ' + category}</h2>
            <Loader className={!loading && 'd-none'}/>
            <div className={`list-movies ${loading && 'd-none'}`}>
                {
                    movies?.map(movie => <ItemMovie key={movie['id']} movie={movie} />)
                }
            </div>
            <div className="visor" ref={eleRef}></div>

        </>
    )
}


export { ListMovies }
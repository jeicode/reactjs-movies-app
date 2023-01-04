import React, { useContext, useEffect } from "react"
import '../App.css'
import { useMovies } from "../hooks/useMovies"
import Loader from "./Loader"
import { MoviesContext } from "context/MoviesContext"
import useElementIsIntersecting from "hooks/useElementIsIntersecting"
import ItemMovie from "./ItemMovie"


function ListMovies(params) {
    const category = params.params?.category || params?.category
    const { movies, loading } = useMovies({ category })
    const {setPage} = useContext(MoviesContext);
    const {show:nextPage, eleRef} = useElementIsIntersecting({autoDisconnect:false})

    useEffect( () => {
        nextPage && setPage(value => value+1);
    }, [setPage,nextPage])

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <h2>{params.title || 'Categorias: ' + category}</h2>
                    <div className="list-movies">
                        {
                            movies?.map(movie => <ItemMovie movie={movie} />)
                        }
                    </div>
                    <div className="visor" ref={eleRef}></div>
                </>
            }

        </>
    )
}


export { ListMovies }
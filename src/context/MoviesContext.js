import React, { useState} from "react";

const MoviesContext = React.createContext(undefined);

export function MoviesContextProvider({children}){
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(true)
    let [page, setPage] = useState(1);

    return (
        <MoviesContext.Provider value={{movies, setMovies, loading, setLoading, page, setPage}}>
            {children}
        </MoviesContext.Provider>
    )
    
}


export {MoviesContext};
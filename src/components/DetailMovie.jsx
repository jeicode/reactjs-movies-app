import React from "react";
import { useMoviesDetail } from "hooks/useMovies";

const YT = 'https://www.youtube.com/embed/'

export default function DetailMovie({ params }) {
    const { idMovie } = params;
    const {movie} = useMoviesDetail({idMovie})
    return (
        <>
            <h2 className="m-4">Detail movie</h2>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={YT + movie['key']}></iframe>
            </div>

            <section>
                <h2 className="mt-4"> {movie['title']} </h2>
                <p> {movie['overview']} </p>
            </section>
        </>
    )




}
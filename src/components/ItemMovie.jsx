import React from 'react'
import { Link } from 'wouter'

const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

export default function ItemMovie({movie}) {
    return (
        <div key={movie['id']} className="movie">
            <div className="container-img">
                <img className="card-img-top" src={IMG_URL + movie['poster_path']} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title"> {movie['title']} </h5>
                <p className="card-text">
                    {movie['overview'].length > 150 ? movie['overview'].slice(0, 150) + '....' : movie['overview']}
                </p>
                <Link href={'/movies/detail/' + movie['id']} className="btn btn-primary">Detail</Link>
            </div>
        </div>
    )
}

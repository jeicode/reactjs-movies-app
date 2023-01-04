import React from "react";
import { Link } from "wouter";

export default function Header() {
    return (
        <header className="mt-4 mb-4">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/movies/upcoming">Upcoming</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/movies/top_rated">Top rated</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/movies/now_playing">Now playing</Link>
                    </li>
                </ul>
        </header>
    )
}
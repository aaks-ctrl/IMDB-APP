import React from 'react';
import '../style/movie-card.css'
export default function MovieCard ({movie}) {
    return (
        <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <div className='content-box'>
        <p>{movie.Title}</p>
        <p>Year : {movie.Year}</p>
          </div>
      </div>
    )
}
import React from 'react';
import { useState} from "react";
import '../style/movie-list.css'
import { MovieCard } from '.'
import HashLoader from "react-spinners/HashLoader";
import {BlankPage} from '.'

export default function MovieList ({movies,isLoading}) {
    let [loading] = useState(true);
    
    if(isLoading)
    {
        return (
            <div className="movie-loader">
                <p className="loader">
                    <HashLoader color={'1363DF'} loading={loading} size={120} />                
                </p>
                {/* <p>LOADING</p> */}
            </div>
        )
    }
    else{
        if(movies===undefined){
            return(
                <div className="noSuchMovie">
                    <BlankPage/>
                </div>
            )
        }
        return (
            <div className='movie-list'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.imdbID}/>
                ))}
            </div>
            )
    }
}
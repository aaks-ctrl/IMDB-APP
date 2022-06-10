import {React,useState} from 'react';
import axios from "axios";
import { Icon } from '@iconify/react';
import '../style/movie-card.css'
const API_BASE_URL = "https://www.omdbapi.com"

export default function MovieCard ({movie}) {

  const [isLoading,setIsLoading]=useState(true);
  const [movieDetail,setMovieDetail] = useState([]);

  const base =API_BASE_URL+"/?i="+movie.imdbID+"&apikey=409d9797";
  async function search () {
    if(isLoading){
      var response;
      response=await axios.get(base);
      setMovieDetail(response.data);
      setIsLoading(false);  
    }
  }
  search();
    return (
        <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <div className='content-box'>
          <div className="row_1">
            <span className="child1">{movieDetail.Country},</span> <span className="child2">{movieDetail.Year}</span>
          </div>
          <div className="row_2">
            {movie.Title}
          </div>
          <div className="row_3">
          <Icon icon="fa-brands:imdb" className='icon'/>
            <span className="rfont">{movieDetail.imdbRating}/10</span>
          </div>
          <div className="row_4">
            {movieDetail.Genre}
          </div>
        </div>
      </div>
    )
}
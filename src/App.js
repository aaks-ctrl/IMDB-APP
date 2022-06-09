import React, { useState } from 'react';
// import './App.css';
import axios from "axios";
import { NavBar } from "./components";
import { MovieList } from './components'
const API_BASE_URL = "https://www.omdbapi.com"

const App = () => {

  const [movies,setMovies] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [inputValue,setInputValue]=useState("")
  
  
  const search = async (e) => {
    if(e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL+"/?s="+inputValue+"&apikey=409d9797"
      );
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  }
  return (
    <div className="main">
      <NavBar search={search}
      inputValue={inputValue}
      setInputValue={setInputValue}
      className="navbar"/>
      <div className="row">
      <MovieList movies={movies} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;

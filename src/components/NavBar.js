import React from 'react';
import "../style/navbar.css"
import SearchIcon from '@mui/icons-material/Search';


export default function NavBar ({setInputValue,inputValue,search}) {
    return (
        <div className="navbar">
            <span className='heading'>
                <span className="yellow">FILMY</span>
                <span>.NET</span>
            </span>
            <div className="search_field">
            <input onChange={(e) => {
                setInputValue(e.target.value);
            }}
            onKeyPress={search}
            type="text"
            placeholder="Search.."
            className="search-bar"
            />
            <SearchIcon className="icon"/>
            </div>
        </div>
    )
}

import React,{useEffect, useState}from "react";
// api key is 5fcb6eb2
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL="http://www.omdbapi.com?apikey=5fcb6eb2";



const App=()=>{

    const [movies,setMovies]=useState([]);

    const [searchTerm,setSearchTerm]=useState("");



    const searchMovies=async(title)=>{
        const response =await fetch(`${API_URL}&s=${'title'}`)
        const data=await response.json();
        console.log(data);
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies('Batman');

    },[])


    return(
     <div className="app">

        <h1>Movie-Land</h1>
        <div className="search">
            <input 
             placeholder="Search for movies"
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)} />


             <img src={SearchIcon}
             alt="Search"
             onClick={()=>searchMovies(searchTerm)}/>
        </div>

        {
            movies?.length > 0
            ? 

            (
                <div className="container">
                    {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                    ))}
                </div>
            )
            
            :
            (
            <div className="empty">
                <h2>No movies found</h2>
            </div> 
            )
        }


      

   
     </div>
    )
}
export default App;
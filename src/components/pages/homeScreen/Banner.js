import React, { useEffect, useState } from 'react'
import '../../../Css/Banner.css'
import axios from '../../../axios';
import requests from '../../../request';
function Banner() {

    const [movie,setMovie] = useState([]);



    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
        };
        fetchData();
    },[])

    console.log(movie)
    console.log(movie?.backdrop_path)
    console.log(movie?.name)

    const truncate =(string,n) =>{
        return string?.length > n ? string.substr(0,n-1) + '...':string;
    }
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
  }}>
    <div className='banner-content'>
       <h1 className='banner-title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
       <div className='banner-buttons'>
       <button className='banner-button'>Play</button>
        <button className='banner-button'>My List</button>
       </div>
       <h1 className='banner-description'>{truncate(movie?.overview,150)}</h1>
    </div>
    <div className='banner-fadeBottom'/>
    </header>
  )
}

export default Banner
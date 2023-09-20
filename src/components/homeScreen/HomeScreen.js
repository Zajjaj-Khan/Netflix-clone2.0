import React from 'react'
import '../../Css/homeScreen.css'
import NavBar from '../layout/NavBar'
import Banner from './Banner'
import requests from '../../request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homeScreen'>
       <NavBar/>
        <Banner/>
        <Row title='Netflix Orignals' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovie}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default HomeScreen
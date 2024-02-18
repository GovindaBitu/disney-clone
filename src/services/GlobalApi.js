import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3"
const movieBaseUrl ="https://api.themoviedb.org/3/trending/all/day?api_key="
const api_key = '79f1d57c4ff8fa86846fec186a766097'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=79f1d57c4ff8fa86846fec186a766097';



// https://api.themoviedb.org/3/trending/all/day?api_key=79f1d57c4ff8fa86846fec186a766097
const getTrendingVideos = axios.get(movieBaseUrl+api_key);

    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
} 
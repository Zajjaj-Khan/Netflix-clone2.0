import axios from 'axios';
const API_KEY = '36c81fcfb1867782b55bc904155b751c';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;
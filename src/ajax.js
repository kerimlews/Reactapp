import axios from 'axios';

const api_key = '7e23e0e12a44a600050e085ae79cc43a';

const URL = (req) => `https://api.themoviedb.org/3${req}`; 

function params (query) {
    return {
        params: {
            api_key,
            query
        }
    }
}

function get(url, query) {
    return axios.get(URL(url), params(query))
        .then((response) => response.data.results)
        .catch((err) => { throw err });
}

export default {
    get
}
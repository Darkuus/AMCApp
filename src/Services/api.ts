import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://amc-api.herokuapp.com/',
    baseURL: 'http://localhost:3333',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
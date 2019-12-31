import axios from 'axios';

const api = axios.create({
  baseURL: 'https://riotapibackend.herokuapp.com/'
})

export default api;
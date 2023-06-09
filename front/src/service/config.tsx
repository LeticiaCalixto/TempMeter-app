import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3333',
    timeout: 9000,
});

export default client;

import axios from 'axios';

const Axios = axios.create ({
    baseUrl: 'http://localhost:8888'
})

export default Axios;
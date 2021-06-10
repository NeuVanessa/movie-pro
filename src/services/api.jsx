import axios from 'react-native-axios';

const api = axios.create({

baseURL: 'https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}'

});
console.log(baseURL);

export default api;

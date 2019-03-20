import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ng-burger-builder.firebaseio.com/'
});

export default instance;
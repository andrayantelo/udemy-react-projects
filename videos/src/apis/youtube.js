import axios from 'axios';

const KEY = 'AIzaSyBsH6rxXyUcGXCkZURRReB1esMOigbypLA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
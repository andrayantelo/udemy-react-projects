import axios from 'axios';
// client side key, nothing can be done here
const K = 'AIzaSyBsH6rxXyU' + 'cGXCkZURRReB1esMOigbypLA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: K
    }
})

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9a9e00778fcd9b212278aae65c6f108b5dbc5efe23b139ad0954841893f89031'
    }
})
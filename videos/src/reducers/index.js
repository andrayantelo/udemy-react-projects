import { combineReducers } from 'redux';
import { VIDEO_SELECTED, VIDEO_SEARCH, UPDATE_TERM } from '../actions';

const videosReducer = (videos = [], action) => {
    if (action.type === VIDEO_SEARCH) {
        return action.payload;
    }
    return videos;
}

const selectedVideoReducer = (selectedVideo = null, action) => {
    if (action.type === VIDEO_SELECTED) {
        return action.payload;
    }
    else if (action.type === VIDEO_SEARCH) {
        return action.payload[0];
    }
    return selectedVideo;
}

const searchTermReducer = (searchTerm = 'dogs', action) => {
    if (action.type === UPDATE_TERM) {
        return action.payload;
    }
    return searchTerm;
}



export default combineReducers({
    videos: videosReducer,
    selectedVideo: selectedVideoReducer,
    searchTerm: searchTermReducer
})
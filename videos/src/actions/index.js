// you can:
// search for videos
// select a video

import youtube from '../apis/youtube';

export const VIDEO_SELECTED = 'VIDEO_SELECTED';
export const VIDEO_SEARCH = 'VIDEO_SEARCH';
export const UPDATE_TERM = 'UPDATE_TERM';

export const selectVideo = (video) => {
    return {
        type: VIDEO_SELECTED,
        payload: video
    }
};

export const searchVideos = (searchTerm) => async (dispatch) => {
    const response = await youtube.get('/search', {
        params: {
            q: searchTerm
        }
    });

    dispatch({ type: VIDEO_SEARCH, payload: response.data.items });
};

export const updateSearchTerm = (searchTerm) => {
    return {
        type: UPDATE_TERM,
        payload: searchTerm
    }
}
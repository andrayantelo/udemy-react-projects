import './VideoItem.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

const VideoItem = ({video, selectVideo}) => {

    return (
        <div className="video-item item" onClick={() => selectVideo(video)}>
            <img 
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                 alt="video.snippet.title"
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    { selectVideo }
)(VideoItem);
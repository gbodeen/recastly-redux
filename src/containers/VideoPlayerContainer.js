import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state, ownProps) => (
    { video: state.currentVideo }
)

const mapDispatchToProps = (dispatch, ownProps) => ({})

var VideoPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPlayer);

export default VideoPlayerContainer;

import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import currentVideoReducer from './currentVideo.js';

var rootReducer = (state = { videos: [], video: null }, action) => {
    if (action.type === 'CHANGE_VIDEO') {
        return currentVideoReducer(state, action)
    } else if (action.type === 'CHANGE_VIDEO_LIST') {
        return videoListReducer(state, action)
    } else {
        return state
    }
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

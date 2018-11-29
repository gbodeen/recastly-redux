import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videoList
  } else {
    return state;
  }
};

export default videoListReducer;

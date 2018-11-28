import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = (q) => {
  searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (items) => {
    store.dispatch(() => changeVideo(items[0]));
    store.dispatch(() => changeVideoList(items));
  })
};

export default handleVideoSearch;




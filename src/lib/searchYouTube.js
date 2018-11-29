var searchYouTube = ({ key, query, max = 5 }, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
      console.log('search succeeded and got: ', items);
    })
    .fail(obj => console.error('search fail in searchYouTube.js', obj));
};

export default searchYouTube;

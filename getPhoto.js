const config = require('./config.js');
const axios = require('axios');

const getPhoto = (keywords, cb) => {
  let options = {
    method: 'get',
    url: 'https://api.unsplash.com/photos/random',
    headers: {
      'Authorization' : `Client-ID ${config.UNSPLASH_TOKEN}`
    },
    params: {
      query: keywords,
      orientation: 'landscape'
    }
  };
  axios(options)
  .then(result => {
    console.log('url received');
    cb(result.data.urls.regular)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};

module.exports = getPhoto;


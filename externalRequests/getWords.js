const axios = require('axios');
const config = require('../config.js');
const sortWords = (syntax) => {
  var searchWords = '';
  for (var i = 0; i < syntax.tokens.length; i ++) {
    var part = syntax.tokens[i];
    var count = 0;
    if (count < 4) {
      if (part.partOfSpeech.tag === 'ADJ' || part.partOfSpeech.tag === 'NOUN') {
        if (searchWords === '') {
          searchWords += (part.text.content);
        } else{
          searchWords += ',' + (part.text.content);
        }
        count += 1;
      } else {
        console.log(' not a noun or adjective')
      }
    }
  }
  return searchWords;
}

const getWords = (content, callback) => {
  let postObj = {
    "document": {
      "type":"PLAIN_TEXT",
      "content": content
    },
    "encodingType":"UTF8"
  }
  axios.post(`https://language.googleapis.com/v1/documents:analyzeSyntax?key=${config.GCP_TOKEN}`,postObj)
  .then(result => {
    let syntax = result.data;
    callback(sortWords(syntax));
  })
  .catch(err => {
    console.error('ERROR: ', err)
  })
}
//for debugging
//getWords('hello there my fine friend');
module.exports = getWords;
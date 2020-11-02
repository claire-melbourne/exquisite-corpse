module.exports = async function analyzeSyntaxOfText(text, callback) {
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();
  const document = {
    content: text,
    type: 'PLAIN_TEXT'
  };
  const encodingType = 'UTF8';
  const [syntax] = await client.analyzeSyntax({document, encodingType});

  console.log('Tokens:');
  var photoSearch = '';
  for (var i = 0; i < syntax.tokens.length; i ++) {
    var part = syntax.tokens[i];
    var count = 0;
    if (count < 4) {
      if (part.partOfSpeech.tag === 'ADJ' || part.partOfSpeech.tag === 'NOUN') {
        if (photoSearch === '') {
          photoSearch += (part.text.content);
        } else{
          photoSearch += ',' + (part.text.content);
        }
        count += 1;
      } else {
        console.log(' not a noun or adjective')
      }
    }
  }
  callback(photoSearch)
}

// analyzeSyntaxOfText('I am the fluffy end but I will keep cats if you let me', (input) => console.log(`https://loremflickr.com/320/240/${input}`))

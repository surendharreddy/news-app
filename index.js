var prompt = require('prompt');
var news = require('./source');
var emoji = require('node-emoji');
require('console.table');

console.log('Get great news here!', emoji.get('newspaper'))

console.log('\n')

console.table([
  {
    name: 'BBC News',
    source: 'bbc-news'
  }, {
    name: 'CNN',
    source: 'cnn'
  }, {
  	name: 'TIME',
  	source: 'time'
  }, {
  	name: 'The Verge',
  	source: 'the-verge'
  }, {
  	name: 'Reddit',
  	source: 'reddit-r-all'
  }, {
  	name: 'Bloomberg',
  	source: 'bloomberg'
  }
]);

console.log('Get API key from https://newsapi.org/','\n')

prompt.start();

prompt.get(['source', 'API_Key'], function (err, result) {
                if (err) { return onErr(err); }
                  console.log('Getting news for:', result.source, '\n')
                  news.getNews(result.source, result.API_Key)
              });

              function onErr(err) {
                  console.log('\n\n\n\n','Thanks,Come back for great news!', emoji.get('wave') );
                  return 1;
              }

              



var prompt = require('prompt');
var news = require('./source');

console.log(news.getNews)

console.log('Enter Source')

prompt.start();

prompt.get(['source'], function (err, result) {
                if (err) { return onErr(err); }
                  console.log('Getting news for:', result.source)
                  news.getNews(result.source)
              });

              function onErr(err) {
                  console.log(err);
                  return 1;
              }



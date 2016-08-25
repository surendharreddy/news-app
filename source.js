var axios = require('axios');

var news = { 
          getNews: function(source, apikey){
               return axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=${apikey}`)
                    .then(function (response) {
                      const { data } = response
                      var todayNews = data.articles

                      for (var i=0; i< todayNews.length; i++) {
                          console.log('--------','\n',
                                    'Title:', todayNews[i].title,'\n',
                                    'Description:', todayNews[i].description,'\n', 
                                    '--------','\n')
                      }
                    })
                    .catch(function (error) {
                      console.log('Please check your source and API key');
                    });
                  }                
            }

module.exports = news;




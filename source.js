var axios = require('axios');

var API_Key = '22aef971353b44d68cf90deeec503138';

var news = { 
          getNews: function(source){
               return axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=${API_Key}`)
                    .then(function (response) {
                      const { data } = response
                      var todayNews = data.articles
                      console.log(todayNews)
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                  }                
            }

module.exports = news;




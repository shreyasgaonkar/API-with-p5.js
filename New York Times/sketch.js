//Initialize the API-Key with Sample Key
var api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var query;
var apiKey = "&api-key=sample-key"


var input;



function setup() {
  
  noCanvas();
  var button = select("#submit");
  button.mousePressed(askQuery);
  input = select("#query");
  
}



function gotData(data) {
  var articles = data.response.docs;
  
  
  for(var i=0; i<articles.length; i++) {
    createElement('h1',articles[i].headline.main);
    createElement('p', articles[i].snippet);
     var link = articles[i].web_url;
  
    createA(""+link+"", "View Full Article");
    console.log(link);
  }

}



function askQuery() {
  query = input.value();
  var url = api+query+apiKey;
  loadJSON(url, gotData);
}


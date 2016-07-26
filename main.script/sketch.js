var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q="
//var city = "Chicago";
var apiKey = "&appid=e5443695562b2564371d9390c830bc1f";
var units = "&units=metric";

var input;

function setup () {
  createCanvas(400,400);
  var button = select("#submit");
  button.mousePressed(weatherAsk);
  
  input = select("#city");
}

function weatherAsk() {
  var city = input.value();
  var url = api+city+apiKey+units;
  loadJSON(url, gotData);
}

function gotData(data) {
  println(data);
  weather = data;
}

function draw () {
  background(0);
  if(weather){
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    ellipse(50,100, temp,temp);
    ellipse(150,100, humidity,humidity);
  }
}
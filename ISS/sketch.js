var lineX = 0;

var url ="http://api.open-notify.org/iss-now.json";

var issX = 100;
var issY = 100;

function setup() {
  createCanvas(600,400);
  
  setInterval(askISS, 500);
  
}

function askISS() {
  loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
   issX = map(lat, -0,-50, 0, width);
   issY = map(long, -100,-120, 0, height);
}

function draw() {
  background(51);
  
  fill(255);
  ellipse(issX, issY, 24, 24);
  
  stroke(255);
  line(lineX, 0, lineX, height);
  lineX += 3;
  if(lineX > width) {
    lineX = 0;
  }
}
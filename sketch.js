var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC&q=";
var input;

function setup() {
  var button = select('#submit');
  button.mousePressed(giveGIF);
  
  var cButton = select('#clear');
  cButton.mousePressed(resetSketch);  
  input = select('#searchGIF');
}

function resetSketch() {
  location.reload();
}


function giveGIF(){
  var url = api + apiKey + input.value();
  loadJSON(url, gotData);
}

function gotData(giphy){
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC&q=";
var input;

function setup() {
  noCanvas();
  var button = select('#submit');
  button.mousePressed(giveGIF);
  input = select('#searchGIF');
}

function giveGIF()
{
  var url = api + apiKey + input.value();
  loadJSON(url, gotData);
}

function gotData(giphy){
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}
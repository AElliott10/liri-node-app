//HW instructions
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")

//SPOTIFY-THIS-SONG Command

var spotify = new Spotify(keys.spotify);

function loadMusic(musicName) {
  spotify.request('https://api.spotify.com/v1/search?q=track:' + musicName + '&type=track&limit=10', function (error, musicResponse) {
    if (error) {
      return console.log(error);
    }
    console.log("Artist: " + musicResponse.tracks.items[0].artists[0].name);
    console.log("Song: " + musicResponse.tracks.items[0].name);
    console.log("URL: " + musicResponse.tracks.items[0].preview_url);
    console.log("Album: " + musicResponse.tracks.items[0].album.name);
  });
};


//CONCERT-THIS COMMAND - check type in : node liri.js jonas brothers:

function loadConcert(bandName) {

  let apikey = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

  axios.get(apikey).then(
    function (bandResponse) {
      console.log("Venue: " + bandResponse.data[0].venue.name);
      console.log("City: " + bandResponse.data[0].venue.city);
      console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
    })
}




//MOVIES-THIS COMMAND - check type in : node liri.js godfather


function loadMovie(movie) {

  var apikey = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

  console.log(apikey)

  axios.get(apikey).then(
    function (movieResponse) {
      console.log("Title: " + movieResponse.data.Title);
      console.log("Year: " + movieResponse.data.Year);
      console.log("Rated: " + movieResponse.data.imdbRating);
      console.log("Country: " + movieResponse.data.Country);
      console.log("Language: " + movieResponse.data.Language);
      console.log("Actors: " + movieResponse.data.Actors);
      console.log("Plot: " + movieResponse.data.Plot);
    }
  );
};

//doWhatInfo COMMAND - 
function doWhatInfo() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    var output = data.split(",");
    for (var i = 0; i < output.length; i++) {
      console.log(output[i]);
    }
  });
};

//Switch Statement - needed to capture command line request
var userInput = process.argv;
var inputTopic = process.argv[2];
var searchTerm = process.argv[3];


switch (inputTopic) {
  case "concert-this":
    loadConcert(searchTerm);
    break;

  case "spotify-this-song":
    loadMusic(searchTerm);
    break;

  case "movie-this":
    loadMovie(searchTerm);
    break;

  case "do-what-it-says":
    doWhatInfo();
    break;
  default:
    console.log("error")
}

//Search by API

function bandInfo() {
  var bandName = "";
  for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
      bandName = bandName + "+" + userInput[i];
    }
    else {
      bandName += userInput[i];
    }
  }
}

  function songInfo() {
    var songName = "";
    for (var i = 3; i < userInput.length; i++) {
      if (i > 3 && i < userInput.length) {
        songName = songName + "+" + userInput[i];
      }
      else {
        songName += userInput[i];
      }
    }
  }

    function movieInfo() {
      var movieName = "";
      for (var i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
          movieName = movieName + "+" + userInput[i];
        }
        else {
          movieName += userInput[i];
        }
      }
    }
  

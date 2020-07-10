// DEPENDENCIES
require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys");

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//FUNCTIONS

//get artist name
var getArtist = function(artist){
    return artist.name;
};

//spotify search songs
var spotifyGetSong = function(songName){
    if (songName === undefined){
        songName = "What's my age again";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data){
            if (err){
                console.log(err)
                return;
            }

            var songs = data.tracks.items;

            for(var i = 0; i < songs.length; i++){
                console.log("-----------------------------")
                console.log(i)
                console.log("Artist(s): " + songs[i].artists.map(getArtist));
                console.log("Song Name: " + songs[i].name);
                console.log("Preview Song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
                console.log("-----------------------------")
            }
        }
    );
};
//spotify search bands
var spotifyGetBand = function(artist){
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(res){
            var jsonData = res.data;

            if (!jsonData.length){
                console.log("Nothing found for " + artist)
                return;
            }
            console.log("Upcoming concerts for " + artist + ":");

            for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i];

                console.log(
                    show.venue.city +
                      "," +
                      (show.venue.region || show.venue.country) +
                      " at " +
                      show.venue.name +
                      " " +
                      moment(show.datetime).format("MM/DD/YYYY")
                  );
            } 
        }
    );
};


//movie search 
var OMDBsearch = function(filmName){
    if (filmName === undefined){
        filmName = "Mr. Nobody";
    }
    var urlHit = "http://www.omdbapi.com/?t=" + filmName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(
        function(res){
            var jsonData = res.data;
            console.log("-----------------------")
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("-----------------------")
        }
    );
};

//do what txt file says
var doWhatItSays = function(){
    fs.readFile("random.txt", "utf8", function(err, data){
        console.log(data);

        var dataArr = data.split(",");

        if(dataArr.length === 2){
            pick(dataArr[0], dataArr[1]);
        }
        else if (dataArr.length ===1){
            pick(dataArr[0]);
        }
    });
};

//chose what you want to do function
var pick = function(caseData, functionData) {
    switch (caseData) {
    case "concert-this":
      spotifyGetBand(functionData);
      break;
    case "spotify-this-song":
      spotifyGetSong(functionData);
      break;
    case "movie-this":
      OMDBsearch(functionData);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("LIRI doesn't know that");
    }
  };

  //command line args function
  var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };

  //MAIN
  runThis(process.argv[2], process.argv.slice(3).join(" "));
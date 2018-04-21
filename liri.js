require("dotenv").config();


//grabs data from local file keys.js
var keys = require("./keys.js");
//NPM module to access Twitter API
var twitter = require("twitter");
//NPM module to access Spotify API
var Spotify = require("node-spotify-api");
//NPM module to access OMDB API
var request = require("request");
//NPM module to read the random.txt file
var fs = require("fs");

//argument's array
var nodeArgv = process.argv;
//all the commands that liri.js can take in
var command = process.argv[2];
//switch case
var param = process.argv[3];

chooseCommand(command, param);

function chooseCommand(command, param){
	switch(command){
		// Gets list of tweets
		case "my-tweets":
		showTweets();
		break;
		//Gets song information
		case "spotify-this-song":
		if(param != null ) {
			spotifySong(param);
		}else {
			spotifySong("'The Sign' by Ace of Base.");

		}
		break;
		//Gets movie information
		case "movie-this":
		if(param != null) {
			omdbData(param);

		}else {
			omdbData("Mr. Nobody");
		}
		break;

		case "do-what-it-says":
		doTHing();
		break;
		default:
	    console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this 'wrap the name of the movie with quotes', do-what-it-says}");
	    break;
	}   
}

//function to show my last 20 tweets
function showTweets () {
	// Passes Twitter keys into call to Twitter API
    var client = new twitter(keys.twitter);
    //	Search parameters includes my tweets up to last 20 tweets 
	var params = { 
	//i just opened my twitter accunt , so i only have a few tweets
		q: "na995909",
		count: 20

	};
    client.get('search/tweets', params, function (error, tweets, response) {
    
     if (!error) {
     //loops through tweets and prints out text and creation date	
     for (var i = 0; i < tweets.statuses.length; i++) {
     
    	var tweetsText = tweets.statuses[i].text;
		var date = tweets.statuses[i].created_at;
		var text = "Tweet Text: " + tweetsText + "\r\n" + "Tweet Creation Date: " + date + "\r\n";
		console.log(text);
	 
        log(text);
      }   
    } else {
      console.log(error);	
	 }
  });
} 	
	
// Calls Spotify API to retrieve song information for song title.
function spotifySong(song) {
	var spotify = new Spotify(keys.spotify);
	// Calls Spotify API to retrieve a track.
    spotify.search({ type: 'track', query: song }, function(error, data) {
	    if ( !error) {
	        for (var i = 0; i < data.tracks.items.length; i++) {
		         var songInfo = data.tracks.items[i];
		         var songData = "Artist: " + songInfo.artists[0].name + "\r\n" + 
		         "Song: " + songInfo.name + "\r\n" + 
		         "Album: " + songInfo.album.name + "\r\n" + 
		         "Preview Link: " + songInfo.preview_url + "\r\n";

		        // artists, song name,albom name,a preview link
		    	console.log(songData);
		    	log(songData);  
	    	} 
	    } else {
	      console.log(error);
		}
	});
} 
// Movie function, uses the Request module to call the OMDB api    
function omdbData(movie) {
	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy", function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var movieObject = JSON.parse(body);
				//console.log(movieObject); // Show the text in the terminal
				var movieResults =
				"Title: " + movieObject.Title+"\r\n"+
				"Year: " + movieObject.Year+"\r\n"+
				"Imdb Rating: " + movieObject.imdbRating+"\r\n"+
				"Country: " + movieObject.Country+"\r\n"+
				"Language: " + movieObject.Language+"\r\n"+
				"Plot: " + movieObject.Plot+"\r\n"+
				"Actors: " + movieObject.Actors+"\r\n"+
				"Rotten Tomatoes Rating: " + movieObject.tomatoRating+"\r\n";
				console.log(movieResults);
				log(movieResults);
			} else {
				console.log("Error :"+ error);
				return;
			}
		}); 
}
//do what iy says function
function doTHing() {
	fs.readFile("random.txt", "utf8", function(error, data){
		if (!error) {
			var arr = data.split(",");
			chooseCommand(arr[0], arr[1]);
		} else {
				console.log("Error: " + error);
		}
	});
}


function log(logText) {
	fs.appendFile('log.txt', logText,
	function(error){
		if(error!=null)
			console.log(error);
  	});
}




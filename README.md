# LIRI-bot

Technologies/APIs:

Node.js
Request Node package
Moment.js Node package
DotEnv Node package
Node-Spotify-API Node package
Bandsintown API
Spotify API
OMDB (Open Movie Database) API




Description:

Liri-Node-App is an application that allows the user to input a certain command, and either a band, song title, or movie name, and it will output relevant information about upcoming events for that band, details about songs with that song title, and information about the movie inputted. This is accomplished through the use of Node.js, the main JavaScript library used on this app, to call each specific API and return the relevant information. The .env file and DotEnv Node.js package were used to safeguard my personal Spotify Developers API key and secret, for the Spotify part of the app to work, the user will need to add a .env file with the following, 'SPOTIFY_ID=your_spotify_id_here' and 'SPOTIFY_SECRET=your_spotify_secret_here'.



Commands:

Note: if the band name, song name, or movie name is more than one word, the user must place the input in quotation marks ("").

1) node liri.js concert-this bandName: This command will allow the user to search the Bandsintown API for the upcoming events of the band that was inputted, and will print the name of the venue, the location of the venue, and the date (MM/DD/YYYY).

2) node liri.js spotify-this-song songName: This command will allow the user to search the Spotify API for that song, and will print the artist of that song, the song name, a link to the Spotify page for that song, and the name of the album that song came from.

3) node liri.js movie-this movieName: This command will allow the user to search the OMDB API for information about the movie that was inputted, and will print the title of the movie, when it was released, the IMDB rating, the Rotten Tomatoes rating, the country it was produced in, the languages it was released in, a brief summary of the plot, and the actors in the movie.

4) node liri.js do-what-it-says: This command will take information from the 'random.txt' file in the app and will run the command and input that is currently in the file, as long as it is in the format 'command,"input"' with no extra spaces or characters.



How to Use?

1) Clone this repository onto your computer.
2) Open the command line (Git Bash, Terminal) and navigate to the Liri-Node-App folder.
3)Input one of the commands listed above with a band name, song, or movie title, and press Enter.
    ![Concert search](screenshots\Screenshot_1.png)
4) You should now have information about that band, song, or movie!
    ![Song search](screenshots\Screenshot_2.png)
    ![Movie search](screenshots\Screenshot_3.png)
    ![Text file reading search](LIRI-bot\screenshots\Screenshot_4.png)
        Note: the 'random.txt' file currently contains 'spotify-this-song,"I Want It That Way"'.
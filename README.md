# liri-node-app

Table of contents
What is Liri
Technologies
Files Included
Functionality

What is Liri

Command line interface where the user can view information on movies, concerts and music.

Giphy Placeholder
![alt text] (https://github.com/AElliott10/liri-node-app/blob/master/ThisCommand.png)

Technologies
Axios: npm i axios
Node-Spotify-API: npm i node-spotify-api
Moment: npm i moment
DotEnv: npm i dotenv


Files

node_modules
.env
.gitignore
keys.js
liri.js
node-modules
package-lock.json
package.json
random.txt

Functionality
User can use the commands in the terminal to search for music, concerts or movies by typing in:

node liri.js spotify-this-song "name of song"; 
ie node liri.js spotify-this-song "Sucker"

node liri.js concert-this "name of band"; 
ie node liri.js spotify-this-song "Jonas Brothers"

node liri.js movie-this "name of movie"; 
ie node liri.js spotify-this-song "Joker"



# liri-node-app

LIRI is a Language Interpretation and Recognition Interface.

LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will do any of the below command when you enter them into the command line:

my-tweets

spotify-this-song

movie-this

do-what-it-says

Type in node liri.js to get the instructions on how to enter the commands correctly. So if you were to type the below command you'd get the last 20 tweets I created (There may not be 20 tweets for me I just created an account)

node liri.js spotify-this-song '<song name here>'
shows the following information about the song in the terminal:
  

*artist(s)

*song name

*preview link of the song from spotify

*album that the song is a part of


node liri.js movie-this '<movie name here>'
this would output the following information to the terminal:

*Title

*Year

*IMDB Rating

*Country

*Language

*Plot

*Actors

*Rotten Tomatoes Rating

*Rotten Tomatoes URL


node liri.js do-what-it-says

These are the npm packages I used and are needed to run the app:


*fs package in node
*twitter
*spotify
*request

to install these npm packages run these commands one at a time.

npm install twitter
npm install spotify
npm install request

examples:

![msg to user to insert corect commands](https://user-images.githubusercontent.com/32469327/39162329-fecc201e-4742-11e8-9e1d-3c11964bbf0e.png)

![default song if user doesn t tipe a song name](https://user-images.githubusercontent.com/32469327/39162340-0c2db84e-4743-11e8-9f8a-4cee7ff967a1.png)

![screen shot songs](https://user-images.githubusercontent.com/32469327/39162345-11878324-4743-11e8-8806-a48441453762.png)

![my tweets](https://user-images.githubusercontent.com/32469327/39162351-19d12346-4743-11e8-82ca-57fbde57a37c.png)

![default movie when user doesn t type movie name](https://user-images.githubusercontent.com/32469327/39162353-1e571182-4743-11e8-9a96-ed5c76dac134.png)

![movie-this example](https://user-images.githubusercontent.com/32469327/39162379-3d49d886-4743-11e8-84b9-a3124f53d5b6.png)

![do-what-it-says command example](https://user-images.githubusercontent.com/32469327/39162384-423f9bdc-4743-11e8-8944-41d32aedc0e3.png)


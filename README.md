WeatherMan
==========

The WeatherMan app is a simple application which shows the current weather at my favorite cities.

It's an Node.js app built with Express.js framework using hogan templating.

To run the app, I use nodemon so that I don't have to restart my Node.js app everytime I make a code change.
Execute the below command at the project home directory.
>nodemon bin/www

The app runs by default on port 3000. This can be changed in the /bin/www file configurations


Code Structure:
The app is initialized in the app.js file and the dependencies are listed out in package.json file.

The routes are defined in the index.js file. The weather.js file has all the business layer code.
The following routes are available for the user
>/ -- Home
>/weather - Weather Home
>/weather/city/state - Current weather details for that city

The weather details are obtained using the Wunderground API. Please refer to the API docs for reference.
http://www.wunderground.com/weather/api/d/docs?MR=1



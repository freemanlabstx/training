const PORT = process.env.port || 8080;
const express = require("express");
const app = express();
const posts = require("./lib/posts");

/*
 * First, let's set "pug" as our app's view engine. To do this,
 * call app.set, passing in two arguments: "view engine", as the key
 * to set, and a value of the string "pug". Note we _aren't_ importing
 * the "pug" package: express does this for us.
 */

/*
 * Next, we'll define a route, GET "/", that renders the actual template.
 * If you don't remember how to define a route, look at some of our previous 
 * exercises. Set the path to "/", and in the callback function, call
 * res.render, passing the name of the template we want to render as the 
 * first argument (we want to render "index"), and the data we want to 
 * pass into the template as the second argument. In our case, let's pass in
 * an object with a key and value of "posts". We've already imported a "posts"
 * array above, so we're going to use it in the template here.
 */

/* 
 * Let's actually ensure that the application is set up, too. Call
 * app.listen, passing in PORT as the first argument, and a callback
 * function as the second: it can simply console.log something like
 * "Listening on ${PORT}", or whatever you'd like the application to say when
 * it's ready for requests.
 */

/*
 * To ensure that everything is working, go to localhost:PORT (PORT defaults to 8080, 
 * unless you change it or pass a PORT environment variable), and look for the template
 * being rendered. If you see a couple blog post-looking text tags, congrats! You did it!
 */

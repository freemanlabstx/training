/*
 * In this exercise, we'll focus on creating a basic Express server.
 *
 * The server will serve one route - "/", * and will accept a "name"
 * param which it will render back in the response, if it's provided.
 *
 * To begin, require the "express" package and set it to the variable
 * "express" (remember to run `npm install`, if you haven't already).
 *
 * With the express package set up, call the express function (with no
 * arguments) and assign it to the value "app".
 *
 * Let's begin by actually setting up the server to handle requests.
 * Our new "app" has a function * "listen", which accepts two arguments:
 *
 * 1. A port to "listen" on. Try 8080, which means that your server will
 *    be accessible at localhost:8080 (running locally on your machine).
 *
 * 2. A callback function, which will be called once the server is ready
 *    for requests. Try console.logging something like "Express is now
 *    listening on port 8080".
 *
 *    Bonus points if you set "port" to its own variable, passing it in
 *    as the first argument to listen, _and_ log it out in the callback
 *    function.
 *
 *    Extra bonus points if you can figure out how to use a PORT environment
 *    variable passed in when you run the application. I'll give you a hint:
 *    environment variables are accessible in Node via `process.env`.
 *
 * 3. Now it's time to set up our first route. An express route is set up by
 *    doing the following:
 *
 *    - Choosing an HTTP method. In our case, let's use GET.
 *    - Choosing a route to "handle". As mentioned in the beginning of the docs,
 *      we'll use "/".
 *    - Defining a callback function, which has two arguments: request, and response.
 *
 *    Call app.get, passing in the "route" as the first argument, and defining
 *    a callback function as the second argument. Again, this function has
 *    two arguments, request, and response (but you can name them whatever you'd like)!
 *
 *    In the callback function for this route, we want to do two different things:
 *
 *      - First, check for the presence of a "name" parameter. This can be done by referencing the
 *        object req.query and looking up the key "name" inside of it. Assign this to the variable "name".
 *      - Now we should send something back in the response. Use res.send to send plaintext
 *        back from the server. Let's do something _slightly_ dynamic: if a name param is present,
 *        return the string `Hello, ${name}!`, otherwise, just return "Hello, world!"
 *
 * When you've completed all these tasks, try running the server with `node index.js`. You can test
 * the server by going to localhost:PORT, where PORT is the first argument in app.listen.
 *
 * Try first visiting the root page on its own (localhost:8080/, for instance) and then again with
 * a name parameter (localhost:8080/?name=Kristian). If everything is working, you should see
 * the name param returned on-screen. Congrats!
 *
 */

const users = require("./users");

/*
 * In this exercise, we'll create an almost fully-featured
 * Express server, which handles all the basic CRUD routes for a "user" resource.
 * Here's what it will look like when done:
 * 
 *   GET     /users
 *   GET     /users/:id
 *   POST    /users
 *   PUT     /users/:id
 *   DELETE  /users/:id
 * 
 * To start, we need to set up our express application. Do the following - looking
 * at our previous exercise if you don't recall how to do something specifically:
 * 
 * 1. Import express, and create an "app" variable that is the result of calling express().
 * 2. Set up the application to listen on port 8080.
 * 3. Set module.exports to app.
 * 
 * Now we can set up the routes for our application.
 * 
 * First, define GET "/users". It should use `res.json` to send back JSON - pass in the results 
 * of calling the function users.getUsers.
 * 
 * Next, define GET "/users/:id". It should use `res.json` to send back JSON, with the result of
 * calling users.getUser with the "id" param from the URL. Remember that params can be used with
 * "req.params" - experiment with booting the application (`node index.js`) and console.log'ing
 * req.params on this route, if you aren't sure how req.params is formatted.
 * 
 * Now, define PUT "/users/:id". Remember that app.get is one of many methods - app.put is available as
 * well. In the function body, set the variable user to the result of the function users.updateUser, passing 
 * in the argument "req.body". This is the request "body" that is sent from the client. 
 * 
 * Your application needs to "opt-in" to parsing request bodies. To do this, require the "body-parser" package,
 * setting it to a variable of your choice (I like "bodyParser"). After you set up the "app" variable, call
 * app.use, passing in the argument bodyParser.json(). This is an express "middleware" function, which
 * adds additional functionality to your application.
 * 
 * With that enabled, the PUT "/users/:id" route should be able to correctly parse and use req.body. Use res.json
 * to return this "created" user back in the response.
 * 
 * Next, define POST "/users". Set the variable user to the result of users.createUser, passing in req.body as the
 * function argument. Use res.json to send this back to the user.
 * 
 * Finally, define DELETE "/users/:id". Call users.deleteUser, passing in the "id" param (look at the previous routes
 * for a reminder on how to do this). This doesn't need to be assigned to a variable - since we're deleting the user,
 * there's nothing to return here. Instead, call res.sendStatus, passing in the argument 204 (a number). This is an
 * HTTP "status code", in this case, indicating "No Content". If you're unfamiliar with HTTP status codes, 
 * https://httpstatuses.com is a good resource. 
 * 
 * To test your work, run `npm test`. This will call `tests.js`, and test each route separately. If you're comfortable
 * with cURL or similar HTTP request tools, you can also test your application by setting up requests to localhost:8080.
 * Our tests do something similar to this. 
 * 
 * If your tests pass, congrats! You did it :)
 *
 */

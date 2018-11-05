const PORT = process.env.port || 8080;
const express = require("express");
const app = express();

/*
 * In this exercise, we'll enhance our express application by adding
 * "middleware". Middleware is, like it says, a "middle" layer of code
 * that is run by Express as a request is being handled. There's a _ton_
 * of different things that middleware is used for:
 *
 * - Logging
 * - Authentication
 * - Redirecting
 * - Other functionality (parsing)
 *
 * Generally, you can think of middleware as a good solution if you want to
 * do something for _every_ route in your application.
 *
 * Logging is a great use-case! While there's a number of great open-source
 * logging solutions (for instance, the express team maintains their own called
 * "morgan": https://github.com/expressjs/morgan), we'll write our own as a good
 * exercise in understanding how middleware works.
 *
 * A piece of middleware is just a function, at its simplest form. A middleware
 * function looks _very_ similar to a callback function for a route handler
 * (like the app.get("/") call below):
 *
 * app.use(function (req, res, next) {
 *   console.log('URL requested at: ', Date.now())
 *   next()
 * })
 *
 * Notice the function called - app.use. This specifies that we're adding a piece
 * of middleware, directly on the Express app itself. This will be called every
 * time a route is handled by our application. In this simplest form, we'll
 * just console.log the current date and time when the URL is requested. The last
 * line in this, "next()", just tells Express to continue with the request. We'll
 * leave it as-is and add it in all our middleware.
 *
 * Let's add our own middleware. We want to log a number of things - I'm going
 * to give a list of what we want, and encourage you to experiment with looking
 * at the Express documentation to figure out how to log each piece. Specifically,
 * every time a route is requested, we should console.log the following:
 *
 * - HTTP method
 * - Request URL (_with_ parameters is okay, too - for instance, either "/about" or "/about?param=Test")
 * - Date (use Date.now() as seen above)
 *
 * Log it in the following format:
 *
 * [METHOD] URL - DATE
 *
 * Try requesting "/" or "/about" in-browser to see the new log format (restart your app in case it
 * doesn't show up, too).
 *
 * Now, let's add some more interesting data. Middleware allows you to "hook" into events as the
 * request/response flow happens in your Express application. If we wanted to know, for instance,
 * what the response sent back to the client was (i.e. was it a successful request?), we can hook
 * on to the "finish" event for the response, like so:
 *
 * app.use((req, res, next) => {
 *   res.on("finish", () => {
 *     // Do something here, like log
 *   });
 *
 *   next();
 * });
 *
 * Let's update the format of our logging middleware to include the response "status", defined
 * at res.statusCode. Because we need to wait for the response to "finish", move the console.log
 * call inside of the callback function for the "finish" event and reformat the log like:
 *
 * [METHOD] URL STATUS - DATE
 *
 * Finally, we can make this log a bit more interesting by adding some colors! Import the "chalk"
 * package using require at the beginning of this file, and then use some of the chalk methods
 * to give the text some color. For instance, you can define the variable method with the following:
 *
 * const method = chalk.magenta(`[${req.method}]`);
 *
 * In this case, we're wrapping [${req.method}] in the color magenta. There's lots of colors supported:
 * check out the chalk docs for more.
 *
 * As the final part of this exercise, we should look at the status code and return a particular color
 * depending on whether the request was successful or not. For instance, if we request a URL that
 * the application doesn't know how to handle, Express will return a status code of 404. Let's define
 * a variable "status", which calls the function chalk.red if the response status code equals 404,
 * or chalk.green if it's equal to anything else. Pass the response status code into both of these functions -
 * if you're unsure where this is set, check out the documentation for the response class for express:
 *
 * https://expressjs.com/en/4x/api.html#res
 *
 * If you get stuck, no worries! We'll look at the final solution together. Mine looks something like
 * this:
 *
 * https://imgur.com/a/i8XXgf1
 *
 */

app.get("/", (req, res) => res.sendStatus(200));
app.get("/about", (req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`));

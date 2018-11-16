// Import the file ./utils/connection, setting
// it to the variable connect.

// Import body-parser, setting it to bodyParser.

// Import express.

// Import mongoose.

// Import morgan.

// Set the variable port to process.env.PORT or 8080.

// Set the variable app to the result of calling the express function.

// Call app.use, passing in the morgan function, which you should call
// with the string argument "combined". This sets up a nice logger
// middleware for express apps.

// Call app.use, passing in the function bodyParser.urlEncoded, which
// takes a single object as an argument, with the key extended
// and value false. This allows express to parse body data from an
// HTML form.

// Call app.use, passing in the function bodyParser.json() as the argument.

// Require './routes/user', destructuring the named export userRouter
// from inside of it.

// Call app.use, which takes two arguments: "/users", and userRouter.
// This sets up a "sub-router" for our express application, which nests everything
// inside of the /users section of our app.

// Set the view engine of express to pug.

// Define a root route "/" that sends a status of 200 back to the user.

// Define an async function "init", which calls:
//  - the connect function (use await)
//  - (optionally) drops the database whenever the app is started,
//    using mongoose.connection.dropDatabase() (use await for this)
//  - app.listen, passing in the port and a callback function which logs
//    the port our express app is listening on

// Call the init function.

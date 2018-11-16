// In this exercise, we'll implement the user "subroutes" to support
// a simple HTML interface for our MongoDB User collection.
//
// Specifically, we'll define the following (note that all routes are
// _relative_ to this router, meaning they all begin with "/users":
//   - /, which should get all the users from Mongo, and render a
//   Pug template "users/index", passing in the users as data to
//   the template, in the format { users: users }
//
//   - /new, which should render a Pug template "users/new"
//
//   - /:id, which gets the id param from the request, calls getUser,
//   and renders the Pug template "users/show", passing in the data
//   { user: user }
//
//   - /, which accepts a request body, calls createUser with that body,
//   and redirects to /users/:id of the new user

// To start, let's import a couple things.

// First, we need to import express - specifically, the "Router" function
// from inside of request. Either require express as a variable, and then
// set the variable Router to express.Router, or just destructure Router
// out of the express require call.

// Next, define userRouter, which is the response of calling the Router
// function.

// Next, import the following named functions from the user file in the
// models directory:
//   - getUsers
//   - getUser
//   - createUser

// Now we can define our first route. Call userRouter.get, passing in the
// path "/", and defining an **async** callback function.

// This function should set the variable users to the value of getUsers
// (using await to wait for the async method getUsers to finish),
// and then should render the template "users/index", passing in a data
// object where users is set to the key users.

// Our next route is another get request, this time to "/new".
// It should render the template "users/new".

// Our next route is a get request at "/:id", with another async callback
// function.

// This function sets id to the value of params.id inside of our request.
// It also defines the variable user, which is the value of calling getUser
// with id (make sure to use await). Render the template "users/show", passing
// in a data object with a key and value of user.

// Our next route is a post to the root route, "/". The callback function
// (async) function sets body from of request.body. It then calls createUser,
// passing the body variable into the function (use await). Set this variable
// to user. Once the user has been created, we should redirect to the user
// route, using res.redirect. Pass in the url /users/:id, where id is the
// new user id.

// Finally, set module.exports to an object, passing in userRouter
// (so userRouter is a _named_ export of this file).

// Make sure that you also look at the files inside the views folder,
// which have some Pug functionality for you to implement so you can actually
// view your users in-browser.

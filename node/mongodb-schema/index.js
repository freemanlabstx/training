const mongoose = require("mongoose");
const connect = require("./utils/connection");
const { User } = require("./models/User");

/*
 *  In this exercise, we'll define a few mongoose schemas,
 *  and utilize them to:
 *  1. Connect to mongodb
 *  2. Create a user with todos
 *  3. Find the user in the database after it's been created
 *  4. Log the user out
 *  5. And close the mongodb connection
 *
 *  To begin, go to ./models/User, and begin defining your
 *  User schema! You'll be directed back here when it's time to write
 *  the createUser function.
 *
 *  Now that we're back in index.js, it's time to finish this exercise
 *  and actually use the models and schemas we've defined.
 *
 *  Create a new function createUser - this is going to be an
 *  _asynchronous function_, so we should prefix the function with the
 *  async keyword:
 *
 *    async function whateverFunc() {
 *    }
 *
 *  This async function will allow us to use the powerful async/await
 *  functionality in Node - instead of relying heavily on Promise behavior
 *  (.then, .catch, etc), which leads to a lot of nested code and confusing
 *  readability issues, async and await will make our code a lot cleaner
 *  and easier to follow.
 *
 *  The createUser function is going to do a couple things (and you could
 *  argue that some of them should be separate functions, but for now,
 *  we'll go with it):
 *
 *  1. Call the connect function, which has been imported from utils/connection.
 *     This function connects to the mongodb instance, and sets up a global
 *     connection inside of mongoose that we'll re-use throughout the function.
 *
 *  2. Drops the database, by calling mongoose.connection.dropDatabase. This is
 *     optional - if you don't add this line, there will be multiple instances
 *     of our user model inside of the database. If you do call this function,
 *  2. Calls User.create, passing in an object with the data we want to provide
 *     to our user. The data we pass in will look something like this:
 *
 *       {
 *         name: "Kristian",
 *         username: "signalnerve",
 *         todos: [
 *           { name: "Finish this exercise" },
 *           { name: "Get lunch" },
 *           { name: "Learn Express, MongoDB, and all the JS in the world" }
 *         ]
 *       }
 *
 *     Pass in a name and username of your choice, and define at least 2 or 3
 *     todos of your own as well.
 *
 *     Finally, prefix this function with "await". This means that the function will
 *     wait for this function to finish executing before continuing with the
 *     rest of the code. The format will look something like this:
 *
 *       await myFunc();
 *
 *  3. Our code will now wait for the user to be created before continuing. Once
 *     the user is created, we should look the user back up, to confirm that
 *     it's actually been persisted in the database. To do this, call User.find,
 *     setting it to the variable user. Because this is an asynchronous operation,
 *     we need to prefix the User.find call with await!
 *
 *  4. With our user retrieved from the DB, let's simply console.log it out to see
 *     what the data looks like.
 *
 *  5. Finally, let's close the mongoose connection by calling
 *     mongoose.connection.close. If we were to kill this node process, or type
 *     Control-C, it's likely that the connection would close on its own. But we
 *     should be safe and ensure that once we're done working with MongoDB, we close
 *     the connection explicitly and not leave any hanging connections to the DB that
 *     we don't keep track of.
 *
 *  6. As a bonus trick, let's comment out all of the code surrounding dropping the
 *     database and creating a user, just leaving the User.find code. When we run
 *     this exercise again, we should make sure that the user is being persisted to
 *     the MongoDB database. If it does... congrats! We've created a database :)
 *
 */

async function createUser() {}

createUser();

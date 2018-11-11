/*
 * A mongoose schema defines common functionality for
 * querying and creating models in mongodb. Let's define a User
 * schema!
 *
 * To begin, import the mongoose package, naming the variable
 * "mongoose".
 *
 * We can now define our first schema. call new mongoose.Schema,
 * passing a single object argument with our user fields. Fields
 * are defined as key value pairs, like so:
 *
 * new mongoose.Schema({
 *   name: String
 *   // ...more fields
 * })
 *
 * The user fields we should define are:
 * - name, which is a String
 * - username, which is a String
 * - created_at, which is an object with two key value pairs:
 *   type, which is Date, and default, which is Date.now
 * - updated_at, which is an object with two key value pairs:
 *   type, which is Date, and default, which is Date.now
 *
 * Once you've defined the User schema, we should actually
 * instantiate the mongoose model. Do this by calling the function
 * mongoose.model, passing in two arguments: the string "User"
 * (the model name), and the userSchema. Set the value of this
 * model to User.
 *
 * Before moving on to our next model, let's export User from this
 * file. Set module.exports to an object, passing in a single key, User.
 * The format will look like this:
 *
 * module.exports = { Thing }
 *
 * Now move on to models/Todo.js - we'll come back to this file soon!
 *
 * Once you've finished models/Todo.js, we need to use the todoSchema
 * inside of our userSchema. Import todoSchema from ./Todo, using
 * the named import format. Given a schema and source file Event, this
 * would look something like:
 *
 * const { eventSchema } = require('./Event')
 *
 * Now we want to use the todosSchema inside of our userSchema. Add a new
 * field todos, setting the value to an array with a single value, todoSchema:
 *
 * const userSchema = new mongoose.Schema({
 *   // ...
 *   events: [eventSchema],
 *   // ...
 * });
 *
 * With this work completed, let's go back to index.js and finish the exercise.
 *
 */

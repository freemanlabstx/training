// Require mongoose and set it to the variable mongoose.

// Define userSchema, which is the value of calling mongoose.Schema,
// passing in an object where:
//   - id is a Number
//   - name is a String
//   - description is a String
//   - created_at is an object with type Date and default Date.now
//   - updated_at is an object with type Date and default Date.now

// Define the variable User, which is the response of calling
// mongoose.model with two arguments: the string "User" and userSchema.

// Next, we'll define some helper functions used to assist lookups
// in our Mongo collection.

// These functions will all build off of the User model, with the
// end-goal of having each function be "chainable" via promises.
// Note that any **query** in mongoose does _not_ return a promise:
// for these, we'll have to chain .exec() on the end of it to
// explicitly return a promise.
//
//   e.g. Todo.find().exec() <- exec() chained on the end

// getUsers is a function that calls User.find(). Chain .exec() on the end of this
// function.

// getUser is a function with an argument id, that returns the result of calling
// the User.findOne, passing in an object with a key and value of id. Chain
// .exec() on the end of this function.

// createUser is a function with an argument body, that returns the result of
// creating a new instance of the User class, passing in the body argument.
// Chain .save() to the end of this new User call.

// updateUser is a function that takes two arguments, id and body.
// It returns the function User.findOneAndUpdate, passing three arguments:
//   - an object with key and value id
//   - body
//   - an _options_ object with new set to true. This indicates that
//     mongoose should return the _new_ version of this updated object
// Chain .exec() to the end of this function

// deleteUser is a function that takes an argument id, and calls User.deleteOne,
// passing an object with key and value id.

// Finally, export each of our helper functions from this file:
//   - getUsers
//   - getUser
//   - createUser
//   - updateUser
//   - deleteUser

const mongoose = require("mongoose");

// Define userSchema by calling the function
// mongoose.Schema, passing in an object where:
// - name is an object, with first and last as Strings
// - description is a string
// - location is a string
// - age is a number
// - verified is a boolean
// - created_at is an object, with a type of Date and
//   default set to Date.now
// - updated_at is an object, with a type of Date and
//   default set to Date.now
//
// Define User to the value of the function mongoose.model,
// passing in the string "User" and userSchema.
//
// Export User using module.exports.

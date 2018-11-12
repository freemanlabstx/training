const connect = require("./utils/connection");
const mongoose = require("mongoose");
const assert = require("assert");
const seed = require("./utils/seed");

// Import the User model from './user'. Make sure to check
// the file for anything that needs to be done!

// A number of functions have been defined, which need
// functionality filled in before they can be used. Each
// function includes an assertion to confirm that the
// query you provide correctly passes the requirements.

async function getAllUsers() {
  // Set the variable users to the result of finding
  // _all_ the users.

  console.log(`Found ${users.length} users`);
  assert.equal(users.length, 101, "Expected to find 101 users!");
}

async function getVerifiedUsers() {
  // Set the variable users to the result of finding
  // all users where verified is true.

  console.log(`Found ${users.length} verified users`);
  users.forEach(user =>
    assert.equal(
      user.verified,
      true,
      "A non-verified user was found in the getVerifiedUsers function"
    )
  );
}

async function getAdultUsers() {
  // Set the variable users to the result of finding
  // all users where age is greater than 21.
  // Queries of this format are done by setting the field as a key,
  // and then using the $gt operator, like so:
  //
  //   Event.find({ user_count: { $gt: 100 } });

  console.log(`Found ${users.length} users over 21`);
  users.forEach(user =>
    assert.equal(
      user.age > 21,
      true,
      "A user under 21 was found in the getAdultUsers function"
    )
  );
}

async function getUsersWithLongLastNames() {
  // More complicated lookups can be done by passing the $where condition
  // into .find. Set the value of users to the result of any user where
  // name.last.length is greater than 9. For instance, if we were looking
  // for an event name, we would do something like...
  //
  //   Event.find({ $where: 'this.name.length > 20' })

  console.log(`Found ${users.length} users with long last names`);
  users.forEach(user =>
    assert.equal(
      user.name.last.length > 9,
      true,
      "A user with a last name shorter than 9 characters was found in the getUsersWithLongLastNames function"
    )
  );
}

async function getKristian() {
  // Find one user in the database by calling .findOne. Lookup the user
  // by passing a name object, with first set to "Kristian" and last set to
  // "Freeman". Set the value of this function call to user.

  console.log(`Found ${user.name.first}!`);
  assert.equal(
    user.name.first,
    "Kristian",
    "The user's name in getKristian is incorrect"
  );
  assert.equal(
    user.name.last,
    "Freeman",
    "The user's name in getKristian is incorrect"
  );
  assert.equal(user.age, 25, "The user's age in getKristian is incorrect");
}

// Once you've filled in all the queries, you should call them in the
// initialize function below.

async function initialize() {
  await connect();
  await mongoose.connection.dropDatabase();
  await seed();

  // Call the defined functions, ensuring that each is prefixed
  // with await:
  // - getAllUsers
  // - getVerifiedUsers
  // - getAdultUsers
  // - getUsersWithLongLastNames
  // - getKristian

  // End your code here!

  console.log("OK :)");
  await mongoose.connection.close();
}

initialize();

const mongoose = require("mongoose");
const User = require("../user");

const _ = require("lodash");
const faker = require("faker");

// This is the seed function! There's nothing to do here,
// but this function sets up a number of random users, using
// the faker library to pass in fake names, locations, and numbers.
//
// There's a single non-random user (hello!) that you'll look up
// as part of the exercise. Notice that this function is designed
// to be asynchronous, by wrapping the looped User.create call
// with Promise.all, so that we can chain off it using await when
// the function is used.

const seed = async () => {
  const arr = _.times(100);

  await User.create({
    name: { first: "Kristian", last: "Freeman" },
    description: "Software engineer and technical trainer",
    location: "USA",
    age: 25,
    verified: true
  });

  return Promise.all(
    arr.map(async () =>
      User.create({
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName()
        },
        description: faker.lorem.sentences(4),
        location: faker.address.country(),
        age: faker.random.number(80),
        verified: faker.random.boolean()
      })
    )
  );
};

module.exports = seed;

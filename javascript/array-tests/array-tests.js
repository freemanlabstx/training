const assert = require("assert");
// No changes are needed above this line.

// Define a cities array that contains the cities
// Phoenix, Los Angeles, and Seattle.
var cities;

var citiesString = cities.map(function(city) {
  // What should map return here to allow the
  // below "assert" check to be true?
  return // ???
}).join(", ");

assert.equal(citiesString, "Phoenix, Los Angeles, Seattle")

// No changes are needed below this line.
assert.notEqual(cities.length, 0, "The cities variable should have at least one object inside of it");
assert.notEqual(cities.length, 1, "Try defining more than one city object inside of the cities array");
assert.equal(cities.find(c => c === "Phoenix", "Phoenix", "The cities array should include Phoenix");

console.log("Passed! :)");

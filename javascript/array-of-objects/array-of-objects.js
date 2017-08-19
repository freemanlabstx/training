/*
 * Hints:
 *
 * Arrays are sets of data. They're defined using bracket-syntax, like this:
 *
 *   var array = [1, 2, 3];
 *
 * An object is a data structure with key and value. A simple object looks like this:
 *
 *   var instructor = {
 *     name: "Kristian"
 *   };
 *
 * Object values can be referenced by their key. Using the above object, we can get `name`:
 *
 *   console.log(instructor.name)
 *
 * An array can contain objects. A simple example (formatted across multiple lines for ease
 * of reading) might look like:
 *
 *   var array = [
 *     {
 *       value: 1
 *     },
 *     {
 *       value: 2
 *     }
 *   ]
 *
 */

// No changes are needed above this line.

/*
 * Exercise goals:
 * 1. Define an array (`cities`) of city objects.
 * 2. A city object has a single key `name`, with a string value.
 * 3. The tests will look at the `cities` variable for the presence of at least two objects, and
 *    log the `name` value of each.
 */

var cities = [
];

// No changes are needed below this line.

const assert = require("assert");
assert.notEqual(cities.length, 0, "The cities variable should have at least one object inside of it");
assert.notEqual(cities.length, 1, "Try defining more than one city object inside of the cities array");

cities.forEach(function(city) {
  assert.notEqual(city.name, undefined, "A city object inside of cities must have a name value")
  console.log(city.name);
});

console.log("Passed! :)");

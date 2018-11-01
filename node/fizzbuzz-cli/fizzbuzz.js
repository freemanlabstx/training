/*
 * Fizzbuzz command line exercise
 *
 * Define a `numberArgument` variable that is the value of a number
 * passed in to the `node` command line binary. For instance, if you run
 * this file with `node fizzbuzz.js 1`, capture the `1` value as
 * `numberArgument`. Recall that arguments are available inside the Node process
 * as an array, set as `process.argv`. Try console.log(process.argv) if you aren't
 * sure what it looks like. Recall as well that accessing members of an array
 * can be done by providing an index, such as `process.argv[0]`.
 *
 * Define a "fizzbuzz" function that meets the following requirements:
 * 1. Accepts a number argument
 * 2. If no number argument is passed, return null
 * 2. If number is divisible by 3, return "Fizz"
 * 3. If number is divisible by 5, return "Buzz"
 * 3. If number is divisible by both 3 and 5, return "FizzBuzz"
 * 4. If not divisible by 3 or 5, return the number
 *
 */

// Begin your changes here.








// No changes are needed below this line.

var response = fizzbuzz(numberArgument);

const assert = require("assert");

if (process.argv[2] === "test") {
  assert.equal(fizzbuzz(), null, "Calling fizzbuzz with nothing should return nothing");
  assert.equal(fizzbuzz(1), 1, "Calling fizzbuzz with 1 should return 1");
  assert.equal(fizzbuzz(3), "Fizz", "Calling fizzbuzz with 3 should return Fizz");
  assert.equal(fizzbuzz(5), "Buzz", "Calling fizzbuzz with 5 should return Buzz");
  assert.equal(fizzbuzz(15), "FizzBuzz", "Calling fizzbuzz with 15 should return FizzBuzz");
  assert.equal(fizzbuzz(20), "Buzz", "Calling fizzbuzz with 20 should return Buzz");
  assert.equal(fizzbuzz(99), "Fizz", "Calling fizzbuzz with 99 should return Fizz");
  console.log("OK! Tests passed :)");
} else {
  console.log(response)
}

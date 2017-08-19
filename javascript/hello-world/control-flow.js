var didSomethingElse = false;
var doSomethingElse = () => { didSomethingElse = true };
var ateFood = false;
var eatFood = () => { ateFood = true };

// No changes are needed above this line.

/*
 * If/else allows multiple "paths" to be taken in code.
 *
 * var thirsty = false;
 * if (thirsty) {
 *   console.log("I am thirsty");
 * } else {
 *   console.log("I am not thirsty");
 * }
 *
 * In the below example, the variable `hungry` is set to true.
 * Using an if/else statement, ensure the following things happen:
 *   1. If hungry, call the function eatFood: `eatFood()`
 *   2. If hungry, set the value `hungry` to `false`.
 *   3. If not hungry, call the function doSomethingElse: `doSomethingElse()`.
 */

var hungry = true;

/*
 * What value should replace `false` in the `if` section of this code?
 */
if (false) {
  // What TWO things should happen if the `if` expression is true?
} else {
  // What ONE thing should happen if the `if` expression is false?
}

// No changes are needed below this line.

const assert = require("assert");
assert.equal(ateFood, true, "The function `eatFood` should have been called in the if block of the code.");
assert.equal(hungry, false, "hungry should be false.");
assert.equal(didSomethingElse, false, "The function `didSomethingElse` shouldn't be called: make sure that it exists in the else block of the code.");

console.log("Passed! :)");

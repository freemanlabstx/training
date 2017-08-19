/*
 * Hints:
 *
 * Functions are pieces of JavaScript code that can be defined and later executed.
 * Functions are defined as such:
 *
 *   function() {
 *   }
 *
 * Functions can accept arguments, which can be used inside the function body:
 *
 *   function(anArg) {
 *     console.log(anArg);
 *   }
 *
 * Functions can be named and referred to later by that name:
 *
 *   function namedFunc() {
 *   }
 *
 * A function can be executed using the () syntax:
 *
 *   namedFunc();
 *
 * If a function has arguments, they can be provided in the () syntax:
 *
 *   function namedFunc(arg) {
 *   }
 *
 *   namedFunc(1);
 *
 * Functions often "return" values, in many cases based on the arguments they receive:
 *
 *   function double(number) {
 *     return number * 2;
 *   }
 *
 *   double(3); // 6
 *
 */

// No changes are needed above this line.

/*
 * Exercise goals:
 * 1. Define a `me` variable with your first name.
 * 2. Define a named function called `printMe` with a `name` argument.
 * 3. In the function body of `printMe`, return the string "I am <name argument>".
 */

var me;

// No changes are needed below this line.

const assert = require("assert");
assert.notEqual(me, undefined, "The me variable should be set to a string of your first name, such as:\n\nvar me = 'NAME';\n");
assert.notEqual(printMe, undefined, "The function printMe should be defined");

var funcResponse = printMe(me);
assert.notEqual(funcResponse, "I am" + me,
  "Adding strings together often requires a space: your function returns 'I am<name> instead of 'I am <name>'. Try adding a space at the end of 'I am'."
);
assert.equal(funcResponse, "I am " + me, "The function printMe should return a string in the format 'I am <me>'");

console.log(printMe(me));
console.log("Passed! :)");

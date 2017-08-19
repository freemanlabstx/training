/*
 * Hints:
 *
 * JavaScript "scope" is the "view" that the function or currently executing code has.
 * This includes what other variables and functions are available to be referenced in the code.
 * We often refer to the current context as `this` -- the actual value of `this` can be a source
 * of confusion for many JavaScript developers.
 *
 * For instance, in the below example, calling the `findName` function, which looks for the `name`
 * value on the context `this`, can either refer to a top-level (global) variable, _or_ the key on
 * an object, depending on what context the function is called in.
 *
 *   var name = "JavaScript";
 *   var me = { name: "Kristian" };
 *
 *   function findName() {
 *     console.log(this.name);
 *   }
 *
 *   findName(); // "JavaScript"
 *   findName.call(me); // "Kristian"
 *
 * The `.bind` function can permanently change the scope of a function to a specific context.
 * Below, `.bind` sets the context of `findName` to always refer to the `me` object:
 * Note that we re-assign the value of `findName` to the response of `findName.bind`.
 *
 *   var name = "JavaScript";
 *   var me = { name: "Kristian" };
 *
 *   function findName() {
 *     console.log(this.name);
 *   }
 *
 *   findName = findName.bind(me);
 *   findName() // "Kristian"
 *
 */

// This line can be ignored! It's used to set up a context inside of the Node/JS intepreter.
(function() {

this.name = "JavaScript";
this.age = 22;

function printNameAndAge() {
  return this.name + " is " + this.age;
}

// No changes are needed above this line.

// Exercise goals have been in-lined throughout the code:

// Goal #1: Define a `me` object that contains the keys `name` and `age`.
var me;

/*
 * Goal #2:
 *
 * This variable should be updated either:
 *   1. Calling `printNameAndAge` with the context `me`
 *   2. Binding `printNameAndAge` to the context `me`.
 *      Note that if you bind the function, you'll need to also call it _after_
 *      binding it, by adding an additional set of parentheses `()` at the end.
 *   3. (bonus: get the tests to pass with both!)
 */
var correctlyBound = printNameAndAge();

// No changes are needed below this line.

const assert = require("assert");
assert.notEqual(typeof correctlyBound, 'function', "correctlyBound is currently a function -- this means that you haven't correctly bound it to a context. Ensure that the variable definition ends with open and closed parentheses in some format.");
assert.notEqual(correctlyBound, "JavaScript is 22", "The context of function `printNameAndAge` is currently top-level, and returning the string 'JavaScript is 22'. Instead, either call the function with the context of your 'me' object, or permanently bind it to 'me'.");

console.log(correctlyBound);
console.log("Passed! :)");

// This line can also be ignored.
})()

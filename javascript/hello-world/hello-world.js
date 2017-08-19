var helloFunction = function(name) {
  return "Hello " + name;
};

// No changes are needed above this line.

/*
 * Variables can be set using the "var" keyword in JavaScript.
 * Variables can be simply declared, such as `var me`, which initializes
 * the variable `me` with no value.
 *
 * Variables can also be set to a value using the `=` syntax, such as:
 *
 * var age = 99;
 *
 * In doing so, the `age` variable now has a value of 99.
 *
 */

var me;

// No changes are needed below this line.

const assert = require("assert");
assert.notEqual(me, undefined, "The me variable should be set to a string of your name, such as:\n\nvar me = 'NAME';\n");

console.log(helloFunction(me));
console.log("Passed! :)");

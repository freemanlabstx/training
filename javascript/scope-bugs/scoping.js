const assert = require("assert");

// No changes are needed above this line.

var a = 10;
var b = function(a) {
  return 100;
}

function sillyScope(b) {
  // !b: if there is no b set
  if (!b) {
    this.b = function(a) {
      return a + 5;
    }
  }

  // If b is set, use it, otherwise,
  // use this.b.
  a = (b || this.b)(0);

  return a;
};

sillyScope();

/*
 * Consider the fifth line of this file, where
 * a is set to 10. The below test, which ensures
 * that a is equal to 10, fails.
 *
 * Can you identify the piece of code that causes this to fail?
 * If so, try fixing that code and making this test pass.
 */
assert.equal(a, 10);

/*
 * The below code passes `null` to the function sillyScope.
 * sillyScope looks for a function argument `b`, which it
 * calls as `c` with an argument of 0.
 *
 * Since there is no argument `b` provided, sillyScope will
 * make its own function `c`. Can you find that function,
 * and change the below equality test from -1 to the actual
 * value that it returns?
 */
var c = sillyScope(null)
assert.equal(c, -1);

/*
 * The below code passes the function `b` to sillyScope.
 *
 * Can you find function `b` and determine what it returns?
 * Does that value depend on the passed in argument?
 *
 * Change the equality test below to what the value of `d`
 * will be.
 */
var d = sillyScope(b)
assert.equal(d, -1);

// No changes are needed below this line.

console.log("Passed! :)");

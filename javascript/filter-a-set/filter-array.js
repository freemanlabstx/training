const assert = require("assert");

var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// No changes are needed above this line.

/*
 * Progressively filtering an array simply means
 * calling `.filter` on a succession of arrays.
 *
 * For instance, we might define an array as:
 *   var array = [1, 2, 3];
 *
 * Filtering on that array and capturing the value would mean:
 *   var newArray = array.filter(function(num) {
 *     return num != 1;
 *   });
 *
 * To "progressively" filter down our sets, we might filter on
 * newArray, thus "combining" filters:
 *
 *   var newerArray = newArray.filter(function(num) {
 *     return num != 2;
 *   });
 */

var notZero;

var lessThanFive;

/*
 * As with many programming languages, determing whether a number
 * is even or odd in JavaScript can be done with the % operator.
 * This operator calculates the "remainder" of a division:
 *
 *   2 % 2 == 0, because there is no left over values from 2 / 2.
 *   3 % 2 == 1, because there is a 1 left over values from 3 / 2.
 *
 * Therefore, an odd number can be checked using `x % 2 == 1`
 */
var oddNumbers;

var greaterThanOne;

/*
 * What do you expect the final value to be? Can you define it as a
 * number below? If you aren't sure, try running the tests while
 * logging (console.log) `greaterThanOne`.
 */
var finalValue;

// No changes are needed below this line.

assert.equal(integers.length, 10, "The integers array shouldn't be changed from its original implementation");
assert.equal(notZero.length, 9, "The notZero array should include every number that isn't equal to zero");
assert.equal(lessThanFive.length, 4, "The lessThanFive array should include every number less than five, and should also be filtered from notZero");
assert.equal(oddNumbers.length, 2, "The oddNumbers array should include every odd number in the set, and should be filtered from lessThanFive");
assert.equal(greaterThanOne.length, 1, "The greaterThanOne array should include every number greater than one, and should be filtered from oddNumbers");

assert.equal(finalValue, 3, "The final value should just be 3");
console.log("Passed! :)");

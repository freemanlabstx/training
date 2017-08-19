const assert = require("assert");

var countVowels = function(str) {
  /*
   * Implement a function to count the number of vowels
   * in the argument str.
   *
   * Replace this return call with the correct number of
   * vowels.
   */
  return -1;
}

// No changes are needed below this line.

var checkCount = (str, expected) => {
  var check = countVowels(str);
  assert.equal(check, expected,
    `Expected countVowels to return ${expected} for '${str}', got ${check}`);
}

checkCount("the", 1);
checkCount("too", 2);
checkCount("testing one two one two", 8);
checkCount("", 0);

console.log("Passed! :)");

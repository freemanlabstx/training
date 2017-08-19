var aNumber = 15;

var myFunc = function() {
  aNumber = 10;
  return aNumber;
}

var newNumber = myFunc();
newNumber += aNumber;
aNumber += 5;

// No changes are needed below this line.

const assert = require("assert");

assert.equal(aNumber, 20);
assert.equal(newNumber, 25);

console.log("Passed! :)");

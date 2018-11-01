/*
 * Import two files using the `require` function:
 *   1. num, which is located at 'lib/handlers/num'
 *   2. version, which is located at 'lib/utils/version'
 *
 * You'll need to make changes to these files, so check them as well!
 *
 * Next, define a function "init" which does two things:
 *   1. console.log calling the numHandler function on num with the argument 99
 *   2. Return the response of the function loadVersion defined on version
 *
 * Make sure to check `lib/handlers/num` and `lib/utils/version` for the rest of the exercise!
 *
 */

// Start your work here!





// No changes are needed below this line

console.log(init());

const assert = require("assert");
assert.equal(num.numHandler(99), 99, "The num handler file should be required as the variable 'num': calling num.numHandler(99) should return 99. Check your imports and exports.");
assert.equal(version.loadVersion(), "1.0.0", "The version file should be required as the variable 'version': calling version.loadVersion() should return '1.0.0'. Check your imports and exports.");

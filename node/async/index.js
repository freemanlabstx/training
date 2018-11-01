const syncrequest = require("sync-request");
const axios = require("axios");
const url =
  "https://bytesized-training-assets.herokuapp.com/long-exercise.json";

const makeRequest = () => {
  if (requestLibrary === axios) {
    return new Promise((resolve, reject) => {
      return requestLibrary(url)
        .then(resolve)
        .catch(reject);
    });
  } else {
    const req = requestLibrary("GET", url);
    return { data: req.getBody("utf-8") };
  }
};

const parseResponse = resp => console.log("Response is: ", resp.data);

// No changes are needed above this line

/*
 * This exercise, dealing with Node async behavior, shows off a couple
 * different things that can happen when writing Node applications.
 * 
 * To begin, we have a request to a website (defined w/ the variable url above)
 * that takes ten seconds to load. Because of this, doing a "synchronous" request
 * will block the rest of our application. This is more common than you'd think!
 * 
 * Things like databases and APIs can take a long time to load, and even with just a 
 * few synchronous calls in your application, it's very likely your application can
 * dramatically slow down.
 * 
 * To demo this, we're using the "sync-request" library, which makes completely blocking
 * and synchronous requests to the URL. 
 * 
 * Populate the empty work function with two lines:
 *   1. First, call the makeRequest function and set it to the variable response
 *   2. Call the parseResponse with the argument response.
 * 
 * Try running this file, and notice the 10s lock on the application. Once it finishes, 
 * the response is logged, and two other lines
 * are logged to the console.
 * 
 * It's slow! We can do better. Next, replace requestLibrary with a promise-enabled library, "axios".
 * 
 * Now we can use promises inside of the work function. Replace the content of the work function with:
 *   1. Calling the makeRequest function...
 *   2. Chaining .then to the end of the function, passing the function argument parseResponse
 * 
 * Execute this file again, and notice that the two console.logs AFTER the work() function call
 * are immediately executed. This application is now non-blocking! You can test this by adding more
 * console.log lines after these two, to confirm that the rest of this file is being executed sequentially,
 * WHILE the work function resolves this request.
 * 
 * Finally, instead of using .then, let's try using an async function. Before "function work()", add the prefix
 * "async". Now rewrite the content of work with:
 *   1. Define the variable response, and set it to "await makeRequest()". This means that we'll
 *     "wait" (using promises underneath) for this request to finish.
 *   2. Call parseResponse with the argument response.
 * 
 * Run the file again. You shouldn't notice any difference from the promise version, but noticably, the way
 * that the function is WRITTEN is a lot like our original solution, which was blocking. This indicates a
 * pretty consistent trend of async functions: they read a lot _clearer_ than promise _or_ callback
 * implementations, but underneath, they're still non-blocking. Neat!
 *
 */

const requestLibrary = syncrequest;

console.log("Beginning request...");

async function work() {}

work();

console.log("The function has been called!");

console.log("Doing some other things after the function call...");

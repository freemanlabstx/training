/*
 * In this file, we'll define a few specific methods for requesting
 * and updating content from our API.
 * 
 * 1. Import the api file. It's _relative_ to this file, so
 *    you can require it with a path like ./myFile. What's the filename
 *    for the API module?
 * 2. Define the first API method: getPosts. It should call
 *    (and return) the value of calling the get function on api, passing in
 *    the argument "/posts", which specifies the "path" we want to call on the API.
 * 3. Define the createPost method, which takes two function arguments: text, and user.
 *    Call (and return) the post method on API, passing two arguments into it: the string
 *    "/posts", and an object with the key and value pairs of text and user.
 * 4. Finally, export these two functions using module.exports. module.exports should be
 *    an object: for instance, if I wanted to export the function myFunc, I might do:
 * 
 *      module.exports = { myFunc: myFunc }
 * 
 *    Note that in ES6, you can simplify this to:
 * 
 *      module.exports = { myFunc }
 * 
 *    Export both getPosts and createPost.
 */

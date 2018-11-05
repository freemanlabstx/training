const PORT = process.env.port || 8080;
const express = require("express");
const app = express();

app.set("view engine", "pug");

/*
 * In this example, we've set up a basic express application
 * with a single route: "/". This route renders the template
 * at views/index.pug.
 *
 * The view is _mostly_ set up, but we need to do two things in
 * order to see the rendered page as we'd expect.
 *
 * First, we need to enable "static file" support for our
 * express application. Call the app.use function, passing in
 * the function express.static as the argument. express.static
 * takes one argument, the path where your static files will be
 * stored. Use the string "public" to indicate that our static
 * files will live in the "public" folder (go ahead and create
 * that folder in the exercise directory, too!)
 *
 * Now we'll download a CSS framework and add it to our application.
 * Go to https://getbootstrap.com/docs/4.1/getting-started/download
 * and click the "Download" button under the "Compiled CSS and JS"
 * section. The downloaded ZIP should have two folders inside of it,
 * "css" and "js". Extract those files (let me know if you need help)
 * and drag both folders into your "public" folder. It should end up
 * looking like this:
 *
 * public/
 * ├── css
 * │   └── bootstrap.css
 * │   └── // more files...
 * └── js
 *     └── bootstrap.js
 *     └── // more files...
 *
 * Restart your application, and then go to view/index.pug to finish
 * the exercise!
 *
 */

app.get("/", (req, res) => res.render("index"));

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`));

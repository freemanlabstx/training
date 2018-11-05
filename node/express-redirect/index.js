const PORT = process.env.port || 8080;
const express = require("express");
const app = express();

/*
 * In this exercise, we'll make use of some of the additional
 * behavior that express can use for handling routing. In particular, we'll
 * look at "redirect" functionality.
 *
 * In web development, a "redirect" refers to taking a request from a user,
 * and sending them to a different location. Redirects happen _a lot_ online:
 * for instance, when you visit links on a service like Twitter or Facebook,
 * these services have "link shortener" services that redirect you from a
 * short URL like https://t.co/rQNeZKNSIX to a longer link, like
 * https://byteconf.com.
 *
 * We're going to build a similar service, but for your "personal links".
 * For instance, I'll build something with the following routes and redirects:
 *
 * /github     -> https://github.com/signalnerve
 * /medium     -> https://medium.com/signalnerve
 * /twitter    -> https://twitter.com/signalnerve
 * /soundcloud -> https://soundcloud.com/signalnerve
 * /website    -> https://signalnerve.com
 *
 * Because everyone uses different services (or none at all!), this exercise
 * is designed for you to implement whatever kind of links you want! For instance,
 * you may define things like "/favorites/movie" and link to an IMDB page, or
 * "/friends/john" to link to a friend's website or Facebook.
 *
 * Pick 2-3 links to set up (or more, if you prefer) and define them as GET requests.
 * Inside the callback function for this route, call the res.redirect function, passing
 * the argument of the URL you want to redirect to.
 *
 * For instance:
 *
 * app.get('/twitter', (req, res) => {
 *   res.redirect("https://twitter.com/signalnerve")
 * })
 *
 * Test the behavior by starting the application and visiting your route. Define 2-3 of these
 * and you'll be done!
 *
 * By the way, bonus points if you want to take this application and actually deploy it
 * somewhere, using something like Heroku or now.sh! I use something similar for the
 * Byteconf website (via URLs like byteconf.com/s/twitter, byteconf.com/s/youtube, etc)
 * to track how many people are visiting those URLs from the website. It's a great way
 * to eliminate the need for remembering URLs, and it looks cool on a business card :)
 *
 */

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`));

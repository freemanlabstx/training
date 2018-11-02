const posts = require("./lib/posts");
const vorpal = require("vorpal")();

vorpal.delimiter("Welcome to chirp $ ").show();

const logPost = (post, ctx) =>
  ctx.log(`${post.text}\nPosted by ${post.user} | Posted at ${post.created}\n`);

const logPosts = (posts, ctx) => posts.forEach(post => logPost(post, ctx));

vorpal
  .command("posts", "Get current posts")
  .action(async function(args, callback) {
    const { data } = await posts.getPosts();
    logPosts(data.posts, this);
    callback();
  });

vorpal
  .command("post <user> [text...]", "Post something to chirp")
  .action(async function(args, callback) {
    const { user, text } = args;
    const { data } = await posts.createPost(text.join(" "), user);
    logPosts(data.posts, this);
    callback();
  });

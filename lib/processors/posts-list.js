/**
 * posts-list.js
 * @description Use blog posts to build the post list in config.json.
 *              Ends up being used in PostList.jsx.
 */
const fs = require('fs');
const path = require('path');
// Helpers
const each = require('async-each-series');
const firstline = require('firstline');
// Configuration
const config = require(path.join('..', '..', 'config.json'));
const posts = fs.readdirSync(path.join('.', 'posts'));
// Doing the work
(posts => {
  let _posts = [];
  each(posts, function(post, next) { // post = "1.11-MAR-2017.md"
    let return_obj = {};
    let meta = post.split('.');
    firstline(path.resolve('posts', post)).then(title => {
      return_obj.number = meta[0];
      return_obj.day = meta[1].split('-')[0];
      return_obj.month = meta[1].split('-')[1];
      return_obj.year = meta[1].split('-')[2];
      return_obj.title = title.substr(4).replace(/\r?\n|\r/g, "");
      return_obj.path = encodeURIComponent(return_obj.title.replace(/\s/g, "-"));
      return_obj.post = post;
      _posts.push(return_obj);
      next();
    })
  }, function(err) {
    if (err) throw err;
    console.log("We done, homie. Time to write to disk.");
    // Set the config object with new posts array.
    config.posts = _posts;
    // Write to file.
    fs.writeFile('./config.json', JSON.stringify(config, null, 2), err => {
      if (err) throw err;
      console.log('Built posts array in ./config.json');
    });
  })
})(posts);

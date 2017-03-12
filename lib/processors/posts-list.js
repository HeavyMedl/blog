/**
 * posts-list.js
 * @description Use blog posts to build the article list.
 */
const fs = require('fs');
const path = require('path');
const config_path = path.join('..', '..', 'config.json');
const config = require(config_path);
const posts = fs.readdirSync(path.join('.', 'posts'));
const posts_arr = (posts => {
  return posts.map(post => {
    let return_obj = {};
    let meta = post.split('.');
    return_obj.number = meta[0];
    return_obj.day = meta[1].split('-')[0];
    return_obj.month = meta[1].split('-')[1];
    return_obj.year = meta[1].split('-')[2];
    return_obj.path = meta[2];
    return_obj.title = meta[2].split('-').join(' ');
    return_obj.post = post;
    return return_obj;
  })
})(posts);
config.posts = posts_arr;
fs.writeFile('./config.json', JSON.stringify(config, null, 2), err => {
  if (err) return console.log(err);
  console.log('Built posts array in ./config.json');
});

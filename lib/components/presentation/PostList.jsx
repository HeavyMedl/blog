import React from 'react';
import {Link} from 'react-router';
import {posts} from '../../../config.json!';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts.sort((a, b) => {
        return parseInt(a.number) < parseInt(b.number);
      })
    };
  }
  createListItem(post) {
    return (
      <li key={post.number}>
        <h4>
          <Link to={'/blog/' + post.path}>{post.title}</Link>
        </h4>
        <span className="subtitle white">{post.day}&nbsp;{post.month}&nbsp;{post.year}</span>
      </li>
    )
  }
  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(this.createListItem)}
      </ul>
    )
  }
}

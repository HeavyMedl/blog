import React from 'react';
import { posts } from '../../../config.json!';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: posts};
  }
  createListItem(post) {
    return (
      <li key={post.number}>
        {post.title}
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

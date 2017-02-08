import React from 'react';
export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a className="category" href="#">About</a>
        <a className="category" href="#">Projects</a>
        <a className="category" href="#">Reading</a>
        <a className="category" href="#">Writing</a>
        <a className="category" href="#">Misc</a>
      </nav>
    )
  }
}

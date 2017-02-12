import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/" className="category" activeClassName="active">About</Link></li>
          <li><Link to="/projects" className="category" activeClassName="active">Projects</Link></li>
          <li><Link to="/reading" className="category" activeClassName="active">Reading</Link></li>
          <li><Link to="/writing" className="category" activeClassName="active">Writing</Link></li>
          <li><Link to="/misc" className="category" activeClassName="active">Misc</Link></li>
        </ul>
      </nav>
    )
  }
}

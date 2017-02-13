import React from 'react';
export default class Title extends React.Component {
  render() {
    return (
      <header className="title">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
    )
  }
}

import React from 'react';
export default class Title extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">{this.props.title}</div>
        <div>{this.props.subtitle}</div>
      </div>
    )
  }
}

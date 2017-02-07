import React from 'react';
import Navigation from './navigation.jsx!';
import InnerComponent from './inner-component.jsx!';

export default class OuterComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        <Navigation/>
        <div className="col-xs-12 col-md-6">
          <div className="box">
            <h1>The spectacle before us was indeed sublime.</h1>
            <InnerComponent/>
          </div>
        </div>
      </div>
    )
  }
}

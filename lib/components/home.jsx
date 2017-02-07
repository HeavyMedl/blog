import React from 'react';
import Title from './title.jsx!';
import Navigation from './navigation.jsx!';
import Article from './article.jsx!';

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <Title title={"kurtlocker.net"} subtitle={"A collection of writings and projects by Kurt Medley."}/>
          <Navigation/>
        </div>
        <Article/>
      </div>
    )
  }
}

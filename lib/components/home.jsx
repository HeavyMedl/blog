import { sites } from '../../app.config.js';

import React from 'react';
import Title from './title.jsx!';
import Navigation from './navigation.jsx!';
import Article from './article.jsx!';

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <Title title={sites.main.title} subtitle={sites.main.subtitle}/>
          <Navigation/>
        </div>
        <Article/>
      </div>
    )
  }
}

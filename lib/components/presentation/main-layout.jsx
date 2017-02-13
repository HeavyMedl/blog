import { sites } from '../../../app.config.js';

import React from 'react';
import Title from './title.jsx!';
import Navigation from './navigation.jsx!';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="row">
        <aside className="col-xs-12 col-md-3">
          <Title title={sites.main.title} subtitle={sites.main.subtitle}/>
          <Navigation/>
        </aside>
        <main className="col-xs-12 col-md-6">
          {this.props.children}
        </main>
        <aside className="col-xs-12 col-md-3">
        </aside>
        <footer className="col-xs-12">
        </footer>
      </div>
    )
  }
}

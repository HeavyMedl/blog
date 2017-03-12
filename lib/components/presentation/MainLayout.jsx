import {sites} from '../../../config.json!';
import React from 'react';
import EasyTransition from 'react-easy-transition';
import Title from './Title.jsx!';
import Navigation from './Navigation.jsx!';

export default class MainLayout extends React.Component {
  render() {
    return (
      <EasyTransition path={location.pathname} initialStyle={{opacity: 0}} transition="opacity 0.3s ease-in" finalStyle={{opacity: 1}}>
        <div className="row">
          <aside className="col-xs-12 col-md-3">
            <Title title={sites.main.title} subtitle={sites.main.subtitle}/>
            <Navigation/>
          </aside>
          <main className="col-xs-12 col-md-9">
            {this.props.children}
          </main>
          <footer className="col-xs-12"></footer>
        </div>
      </EasyTransition>
    )
  }
}

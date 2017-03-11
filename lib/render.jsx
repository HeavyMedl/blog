import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './components/presentation/MainLayout.jsx!';
import Post from './components/presentation/Post.jsx!';

ReactDom.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Post} />
      <Route path="projects" component={Post} />
      <Route path="reading" component={Post} />
      <Route path="blog" component={Post} />
      <Route path="misc" component={Post} />
    </Route>
  </Router>
), document.getElementById('app'));

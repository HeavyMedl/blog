import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './components/presentation/main-layout.jsx!';
import Article from './components/presentation/article.jsx!';

ReactDom.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Article} />
      <Route path="projects" component={Article} />
      <Route path="reading" component={Article} />
      <Route path="writing" component={Article} />
      <Route path="misc" component={Article} />
    </Route>
  </Router>
), document.getElementById('app'));

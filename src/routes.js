import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Main from './pages/Main';
import About from './pages/About';
import Lab from './pages/Lab';
import ListPage from './containers/ListPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main}/>
    <Route path='/about' component={About} />
    <Route path='/list' component={ListPage} />
    <Route path='/lab/:id' component={Lab} />
  </Route>
);

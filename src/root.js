import { Router, Route, Link , browserHistory} from 'react-router'
import './sass/style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Index } from './script/index';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <Route path="/about" component={Index}/>
    </Route>
  </Router>
, document.getElementById('root'));

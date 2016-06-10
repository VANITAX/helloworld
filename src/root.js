import router , { Router, Route, Link , browserHistory , IndexRoute , Redirect, NoMatch} from 'react-router'
import './sass/style.scss';
import React from 'react';
import { render , Component } from 'react-dom';
import { Index} from './script/index';
import { Works , Work } from './script/component/works';
import { About } from './script/component/about';


const routes = (

  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={ Works } />
      <Route path="about" component={About}/>
      <Route path="work/:id" component={Work}/>
    </Route>
  </Router>

)

render(routes, document.getElementById('root'));

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RouteTransition from './containers/RouteTransition';

import Front from './pages/Front/Front';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

export default (
    <Route path="/" component={RouteTransition}>
        <IndexRoute component={Front} />
        <Route path="skills" component={Skills} />
        <Route path="work" component={Work} />
        <Route path="contact" component={Contact} />
    </Route>
);
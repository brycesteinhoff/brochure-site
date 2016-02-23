import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Front from './pages/Front';
import Skills from './pages/Skills';

export default (
    <Route path="/" component={App}>
    	<IndexRoute component={Front} />
        <Route path="/skills" component={Skills} />
    </Route>
);
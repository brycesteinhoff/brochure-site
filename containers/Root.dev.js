import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { default as routes } from '../routes';
import App from './App';
import DevTools from '../components/DevTools';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <App>
                    <Router history={history} routes={routes} />
                    <DevTools />
                </App>
            </Provider>
        );
    };
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};
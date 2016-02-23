import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { default as routes } from '../routes';
import DevTools from '../components/DevTools';
import { Router } from 'react-router';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <div className="Dev_wrapper">
                    <Router history={history} routes={routes} />
                    <DevTools />
                </div>
            </Provider>
        );
    };
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};
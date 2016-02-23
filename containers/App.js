import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { children } = this.props;

        return (
            <div className="App">
                <Navbar />
                {children}
            </div>
        );
    };
}

App.propTypes = {
    // Injected by React Redux
    //
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(App);
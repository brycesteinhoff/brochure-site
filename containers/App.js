import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import 'normalize.css';

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { children, inputValue } = this.props;

        return (
            <div>
                <span>This is the app container</span>
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
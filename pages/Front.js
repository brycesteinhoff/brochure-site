import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import '../assets/sass/some_component';

class Front extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { children, inputValue } = this.props;

        return (
            <div className="some_component">
                <span>This is the front page</span>
                {children}
            </div>
        );
    };
}

Front.propTypes = {
    // Injected by React Redux
    //
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Front);

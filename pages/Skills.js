import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Skills extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { children, inputValue } = this.props;

        return (
            <div>
                <span>This is the skills page</span>
                {children}
            </div>
        );
    };
}

Skills.propTypes = {
    // Injected by React Redux
    //
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Skills);
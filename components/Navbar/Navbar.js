import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import './style.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { children } = this.props;

        return (
            <div className="Navbar">
                <ul>
    				<li><a href="#"></a></li>
    				<li><a href="#"></a></li>
    				<li><a href="#"></a></li>
    				<li><a href="#"></a></li>
    			</ul>
            </div>
        );
    };
}

Navbar.propTypes = {
    // Injected by React Redux
    //
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Navbar);
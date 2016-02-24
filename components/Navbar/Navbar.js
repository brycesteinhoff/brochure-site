import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav_Button from '../Nav_Button/Nav_Button';

// Styles
import './style.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Navbar">
                <ul>
    				<li><Nav_Button path="/" className="front" /></li>
                    <li><Nav_Button path="/skills" className="skills" /></li>
    			</ul>
            </div>
        );
    };
}

Navbar.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Navbar);
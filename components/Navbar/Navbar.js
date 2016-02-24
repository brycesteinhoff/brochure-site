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
                <p className="Navbar__title">MENU</p>
                <ul>
    				<li><Nav_Button path="/" className="front" /></li>
                    <li><Nav_Button path="/skills" className="skills" /></li>
                    <li><Nav_Button path="/work" className="work" /></li>
                    <li><Nav_Button path="/contact" className="contact" /></li>
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
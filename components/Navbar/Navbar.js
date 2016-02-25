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
                <div className="Navbar__inner">
                    <p className="Navbar__title">MENU</p>
                    <ul className="Navbar__nav">
        				<li><Nav_Button path="/" className="front" flyoutLabel="Welcome" /></li>
                        <li><Nav_Button path="/skills" className="skills" flyoutLabel="Skills" /></li>
                        <li><Nav_Button path="/work" className="work" flyoutLabel="work" /></li>
                        <li><Nav_Button path="/contact" className="contact" flyoutLabel="Contact" /></li>
        			</ul>
                </div>
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
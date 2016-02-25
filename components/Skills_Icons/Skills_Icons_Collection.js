import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Skills_Icon from './Skills_Icon';

// Styles
import './style.scss';

class Skills_Icons_Collection extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Skills_Icons_Collection">
                <Skills_Icon />
            </div>
        );
    };
}

Skills_Icons_Collection.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Skills_Icons_Collection);
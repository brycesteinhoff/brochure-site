import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actions';

// Styles
import './style.scss';

class Nav_Button extends Component {
    constructor(props) {
        super(props);
    };

    changeRoute(route) {
        this.props.dispatch(actionCreators.changeRoute(route));
    }

    render() {
        return (
            <a className={this.props.className} onClick={() => this.changeRoute(this.props.path)}></a>
        );
    };
}

Nav_Button.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Nav_Button);
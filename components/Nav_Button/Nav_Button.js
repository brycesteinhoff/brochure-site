import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actions';

// Styles
import './style.scss';

class Nav_Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault();

        this.props.dispatch(
            actionCreators.changeRoute(this.props.path)
        );
    };

    render() {
        return (
            <a href={this.props.path} className={'Nav_Button ' + this.props.className + ' ' + this.props.active} onClick={this.handleClick}>
                <div className="Nav_Button__icon">
                    <i />
                </div>
                <div className="Nav_Button__flyout">
                    {this.props.flyoutLabel}
                </div>
            </a>
        );
    };
}

Nav_Button.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
        // Is this a valid place to get current route?
        // https://github.com/reactjs/redux/issues/637
        // https://github.com/reactjs/react-router-redux/pull/259
        active: (state.routing.locationBeforeTransitions.pathname == ownProps.path) ? 'active' : ''
    };
};

export default connect(mapStateToProps)(Nav_Button);
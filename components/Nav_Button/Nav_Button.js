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
            <a href={this.props.path} className={'Nav_Button ' + this.props.className} onClick={this.handleClick}></a>
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
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import './style.scss';

class Skills_Icon extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Skills_Icon">
                <img src={'/assets/img/tech-icons/' + this.props.icon} title={this.props.name} />
            </div>
        );
    };
}

Skills_Icon.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Skills_Icon);
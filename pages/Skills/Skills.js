import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import '../../assets/sass/Page';
import './style.scss';

class Skills extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Page Skills">
                <div className="Page__content">
                    <span>This is the skills page</span>
                </div>
            </div>
        );
    };
}

Skills.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Skills);
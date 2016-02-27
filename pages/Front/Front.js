import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Front_Welcome from '../../components/Front_Welcome/Front_Welcome';

// Styles
import '../../assets/sass/Page';
import './style.scss';

class Front extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Page Front">
                <div className="Page__content">
                    <Front_Welcome />

                    {/*<div className="container">
                        <div className="Page__box">
                            <div className="Page__box__padded">
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    };
}

Front.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Front);

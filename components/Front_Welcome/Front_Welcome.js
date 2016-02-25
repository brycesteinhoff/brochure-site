import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actions';

// Styles
import './style.scss';

class Front_Welcome extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Front_Welcome">
                <div className="container">
                    <div className="Front_Welcome__title">
                        <h1>
                            Bryce <span className="last">Steinhoff</span>
                            <p className="sub-line">Full Stack Developer</p>
                        </h1>
                    </div>

                    <div className="Front_Welcome__intro">
                        <p>Hello! I'm a full stack developer with many years of experience building modern solutions for the web. My thorough understanding of every layer in the web stack and expertise using the languages and tools of the trade — from browser to server — enable me to engineer elegant and effective applications.</p>
                        <p>I'm currently seeking a full-time position working on exciting web-based applications with a team of passionate developers.</p>
                    </div>
                </div>
            </div>
        );
    };
}

Front_Welcome.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Front_Welcome);
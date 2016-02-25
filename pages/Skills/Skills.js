import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Skills_Icons from '../../components/Skills_Icons/Skills_Icons_Collection';

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
                    <div className="container">
                        <h2>Skills</h2>

                        <div className="Page__box">
                            <p>The web moves fast, and there are fantastic new tools being created all the time that allow developers to leverage the web in new ways. I enjoy staying sharp by learning and hacking the evolving technologies of the web.</p>
                            <p>Below are a some of the languages and software for which I'm proficient.</p>

                            <Skills_Icons />
                        </div>
                    </div>
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
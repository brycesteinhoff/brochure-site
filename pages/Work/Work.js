import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import '../../assets/sass/Page';
import './style.scss';

class Work extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Page Work">
                <div className="Page__content">
                    <div className="container">
                        <h2>Work</h2>

                        <div className="Page__box">
                            <p>The web moves fast, and there are fantastic new tools being created all the time that allow developers to leverage the web in new ways. I enjoy staying sharp by learning and hacking the evolving technologies of the web.</p>
                            <p>Below are a some of the languages and software in which I have experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

Work.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Work);

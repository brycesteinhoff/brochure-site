import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Styles
import '../../assets/sass/Page';
import './style.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Page Contact">
                <div className="Page__content">
                    <div className="container">
                        <h2>Let's Talk!</h2>

                        <div className="Page__box">
                            <p>If you're looking to add a talented developer to your team, I'd love to chat!</p>
                            <p>Please send an email to <a href="mailto:bryce@brycesteinhoff.com">bryce@brycesteinhoff.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

Contact.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps, {})(Contact);

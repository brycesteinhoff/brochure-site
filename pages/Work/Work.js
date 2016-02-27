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
                            <div className="Page__box__padded">
                                <p>Here's a sampling of the projects and types of development work I've done.</p>
                            </div>

                            <div className="Page__box__image">
                                <img src="/assets/img/work/kiddosafe.jpg" />
                            </div>

                            <div className="Page__box__padded smaller-text">
                                <p>Kiddosafe was a web application for providing childcare security, check-in/out, and family relationship management for organizations such as daycares and churches. It was marketed & sold as a software as a service application, and integrated with locally hosted barcode scanners and thermal printers.</p>
                                <p>I developed the front- and back-end components of this multi-client application.</p>
                            </div>

                            <div className="Page__box__image">
                                <img src="/assets/img/work/server.jpg" />
                            </div>

                            <div className="Page__box__padded smaller-text">
                                <p>I have designed & built a variety of special-purpose software tools to help organizations manage, transform, and utilize data. My experience includes designing/implementing RESTful data API's and integrating with other third-party services.</p>
                                <p>I feel at home in Unixy environments, have managed a variety of server architectures, and am familiar with distributed web architectures.</p>
                            </div>

                            <div className="Page__box__image">
                                <img src="/assets/img/work/plantmidwest.jpg" />
                            </div>

                            <div className="Page__box__padded smaller-text">
                                <p>PlantMidwest is a religious organization in St. Louis that meets quarterly throughout the Midwest. Through LaunchBot Creative I developed a web presence that provided much needed tools for their organization, including online registration for events and media cataloging.</p>
                            </div>

                            <div className="Page__box__image">
                                <img src="/assets/img/work/showmecannabis.jpg" />
                            </div>

                            <div className="Page__box__padded smaller-text">
                                <p>Show-Me Cannabis is a state-wide, non-profit political advocacy organization in Missouri. To better communicate with their constituency, they hired LaunchBot to develop a a cutting-edge website with deep integration with backend CRM software.</p>
                            </div>
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

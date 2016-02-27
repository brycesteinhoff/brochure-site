import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Skills_Icon from './Skills_Icon';

// Styles
import './style.scss';

class Skills_Icons_Collection extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Skills_Icons_Collection">
                <Skills_Icon name="JavaScript" icon="javascript.svg" />
                <Skills_Icon name="HTML5" icon="html5.svg" />
                <Skills_Icon name="CSS3" icon="css3.svg" />
                <Skills_Icon name="Node.js" icon="node.svg" />
                <Skills_Icon name="AngularJS" icon="angular.svg" />
                <Skills_Icon name="ReactJS" icon="react.svg" />
                <Skills_Icon name="Vue.js" icon="vue.svg" />
                <Skills_Icon name="jQuery" icon="jquery.svg" />
                <Skills_Icon name="SASS Precompiler" icon="sass.svg" />
                <Skills_Icon name="Bootstrap CSS Framework" icon="bootstrap.svg" />
                <Skills_Icon name="Modern OO PHP" icon="php.svg" />
                <Skills_Icon name="Laravel Framework" icon="laravel.svg" />
                <Skills_Icon name="MySQL RDBMS" icon="mysql.svg" />
                <Skills_Icon name="MongoDB" icon="mongodb.svg" />
                <Skills_Icon name="Gulp Build System" icon="gulp.svg" />
                <Skills_Icon name="Browserify" icon="browserify.svg" />
                <Skills_Icon name="Webpack Bundler" icon="webpack.svg" />
                <Skills_Icon name="Git Version Control" icon="git.svg" />
                <Skills_Icon name="Linux OS" icon="linux.svg" />
                <Skills_Icon name="Apache Web Server" icon="apache.svg" />
                <Skills_Icon name="NGINX Web Server" icon="nginx.svg" />
                {<Skills_Icon name="Adobe Creative Suite" icon="adobe.svg" />}
            </div>
        );
    };
}

Skills_Icons_Collection.propTypes = {
}

function mapStateToProps(state, ownProps) {
    return {
    };
};

export default connect(mapStateToProps)(Skills_Icons_Collection);
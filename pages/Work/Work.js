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
                    <span>This is the work page</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis velit in tellus dapibus, ut pretium diam suscipit. Vivamus porta diam libero, feugiat tristique arcu venenatis quis. Fusce bibendum, nisl eu facilisis interdum, augue justo tristique eros, vel pretium orci nisl vitae arcu. Quisque quis pretium nibh. Proin in eleifend est, euismod tristique sapien. Morbi aliquam non mauris non tristique. Pellentesque et tempus purus, tincidunt egestas justo. Aenean a finibus odio. Integer sit amet vehicula justo, quis lacinia mauris. Phasellus in pharetra massa, vel placerat nisl. Nulla facilisi. Vestibulum pellentesque vitae augue vel convallis. Ut in magna ac sem commodo maximus. Vivamus blandit dui non leo dictum, quis mollis tortor viverra. Vestibulum ultrices finibus arcu, sit amet gravida lacus molestie a. Nunc bibendum finibus nulla, et efficitur elit.</p>

                    <p>Morbi sit amet mollis sapien. Aenean orci nisl, mollis venenatis lacus in, vulputate tristique magna. Vestibulum tristique aliquam tortor, vitae aliquet enim ornare eu. Maecenas est turpis, vehicula a venenatis ac, vestibulum non augue. Nunc efficitur rutrum velit, vitae aliquam libero vestibulum a. Curabitur congue tortor vel dolor luctus faucibus. In luctus finibus massa, ac volutpat urna fringilla in. Etiam tristique scelerisque ex, et molestie sapien. Sed sollicitudin nibh est, ut egestas lectus laoreet id. Nullam ut diam at mi luctus pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vitae hendrerit tellus. Nunc ut consequat elit, at efficitur nibh.</p>

                    <p>Nam ac tellus ac arcu rhoncus ultrices. Fusce orci dolor, molestie ut dignissim eu, cursus sit amet leo. Suspendisse gravida, nisi ac elementum mattis, tortor turpis dignissim justo, eget efficitur turpis nunc vel neque. Cras vel eleifend lorem. In hac habitasse platea dictumst. Maecenas dignissim eget massa ac lobortis. In non mi leo. Aenean fermentum scelerisque nunc. Suspendisse in metus eget turpis porttitor convallis ut eu orci. Morbi vitae purus ut ante dignissim vulputate sit amet eu diam. Aenean non sagittis lorem, sed tristique ex. Aenean laoreet sapien sed sem congue tempor. Donec hendrerit elit quis egestas rhoncus. Phasellus vitae ex dui. Cras eget suscipit nibh.</p>

                    <p>Pellentesque molestie pretium ante a venenatis. Fusce ac maximus tellus. Integer maximus ipsum odio, eu luctus urna rutrum quis. Vestibulum turpis nibh, fringilla ut quam gravida, interdum ullamcorper nisl. Aenean auctor odio non molestie feugiat. Curabitur tincidunt ipsum neque, non posuere nulla pellentesque eu. Duis laoreet mi ipsum, eu tincidunt est faucibus in. Donec eget purus eget mauris laoreet scelerisque pulvinar non arcu. Maecenas tincidunt viverra elit in elementum.</p>

                    <p>Praesent non convallis sem. Morbi eget justo leo. Maecenas euismod elit ac justo volutpat cursus. Etiam scelerisque lorem risus, ut aliquam tellus suscipit quis. Donec leo massa, ornare at vehicula in, pulvinar vitae elit. Duis at vestibulum diam, sit amet porttitor ligula. Suspendisse a efficitur enim, in suscipit nisl. Suspendisse non orci sapien. Aenean accumsan lorem a viverra condimentum. Suspendisse tincidunt finibus magna, id tincidunt leo tristique eu.</p>
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

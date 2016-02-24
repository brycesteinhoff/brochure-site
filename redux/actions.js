// Action creators

import { push as routerPush } from 'react-router-redux';

// Example
export function clearResults() {
    return {
        type: 'CLEAR_RESULTS'
    };
};

// Change route
export function changeRoute(route) {
    return (dispatch, getState) => {
        dispatch(routerPush(route));
    };
};
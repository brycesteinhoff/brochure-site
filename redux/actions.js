// Action creators

import { push as routerPush } from 'react-router-redux';

// Change route
export function changeRoute(route) {
    return (dispatch, getState) => {
        dispatch(routerPush(route));
    };
};
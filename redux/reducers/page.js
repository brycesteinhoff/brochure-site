import { PAGE_SWITCH } from '../constants/ActionTypes';

const initialState = {
    currentPage: 'Front'
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case PAGE_SWITCH:
            return state;
        default:
            return state;
    }
};
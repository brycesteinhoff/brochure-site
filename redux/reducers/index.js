import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as page } from './page.js';

const rootReducer = combineReducers({
	routing,
    page
});

export default rootReducer;
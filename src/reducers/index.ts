import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import session from './dummy';

const rootReducer = combineReducers({
	session, 
	router: routerReducer,
	form: formReducer
})

export default rootReducer;
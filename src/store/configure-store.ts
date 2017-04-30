import {
	createStore,
	applyMiddleware,
	compose,
	Middleware
} from 'redux';

declare const __DEV__: boolean;

import { fromJS } from 'immutable';
// import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import logger from './logger';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers/index';

const history = createHistory();

const configureStore = (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(..._getMiddleware()),
			persistState('session', _getStorageConfig()),
			__DEV__ && environment.devToolsExtension ?
				environment.devToolsExtension() :
				f => f
		)
	)

	_enableHotLoader(store);
	return store;
}


let _getMiddleware = ():Middleware[] => {
	let middleware = [
		routerMiddleware(history),
		thunk
	]

	if(__DEV__) {
		middleware = [ ...middleware, logger]
	}

	return middleware;
}

const environment: any = window || this;

let _enableHotLoader = (store) => {
	if(!__DEV__) {
		return
	}

	const { hot } = module as any;

	if(hot) {
		hot.accept('../reducers', ()=> {
			const nextRootReducer = require('../reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}
}

let _getStorageConfig = () => {
	return {
		key: 'react-boiler-seed',
		serialize: (store) => {
			return store && store.session ?
				JSON.stringify(store.session.toJS()) : store;
		},
		deserialize: (state) => ({
			session: state ? fromJS(JSON.parse(state)) : fromJS({})
		})
	}
}

export default configureStore;
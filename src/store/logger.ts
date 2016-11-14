import createLogger from  'redux-logger';
import immutableToJs from '../utils/immutable-to-js';

const logger = createLogger({
	collapsed: true,
	stateTransformer: (state) => {
		return immutableToJs(state);
	},
	predicate: (getState, { type }) => {
		return type !== 'redux-form/BLUR' &&
           type !== 'redux-form/CHANGE' &&
           type !== 'redux-form/FOCUS' &&
           type !== 'redux-form/TOUCH';
	}
});

export default logger;
import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import configureStore from './store/configure-store';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
	<div>
		<Provider store={ store } >
			<Router history={ history } >
				{ routes }
			</Router>
		</Provider>
	</div>,
	document.getElementById('root')
)
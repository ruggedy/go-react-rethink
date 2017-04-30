import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { AppContainer } from 'react-hot-loader';
import AppComponent from './containers/index';

import routes from './store/routes';
import configureStore from './store/configure-store';

import injectTapEventPlugin from 'react-tap-event-plugin';

const history = createHistory();

injectTapEventPlugin();

const store = configureStore({});
// const history = syncHistoryWithStore(browserHistory, store);

const render = (Component, history) => {
	ReactDom.render(
		<AppContainer>
			<Provider store={store} >
				<Component history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
}

render(AppComponent, history)
const { hot } = module as any;
if(hot) {
	hot.accept('./containers', () => {
		render(AppComponent, history)
	})
}

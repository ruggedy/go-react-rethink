import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import routes from '../store/routes';

const AppComponent = ({ history }) => (
	<Router>
		{routes}
	</Router>
)


export default AppComponent;
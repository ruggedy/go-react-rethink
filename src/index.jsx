import React from 'react';
import ReactDom from 'react-dom';


import AppContainer from "./containers/app";
// const history = syncHistoryWithStore(browserHistory, store);

const render = (Component) => {
	ReactDom.render(
		<Component/>,
		document.getElementById('root')
	)
}

render(AppContainer)

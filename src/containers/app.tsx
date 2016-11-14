import React, { Component } from 'react';
import Banner from '../components/banner/banner';
import Values from '../components/values/values';
import Services from '../components/services/services';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';
interface Props {

}

interface State {

}

class App extends Component<Props, State> {
	render() {

		return (
			<div>
				<MuiThemeProvider muiTheme={theme}>
					<div>
						<Banner />
						<Values />
						<Services />
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default App;
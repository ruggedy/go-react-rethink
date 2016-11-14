
import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors';
import { spacing, getMuiTheme } from 'material-ui/styles';

const rawBaseTheme = {
	spacing:spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: Colors.indigo500,
		primary2Color: Colors.indigo700,
		primary3Color: Colors.indigo300,
		accent1Color: Colors.deepPurple500,
		accent2Color: Colors.deepPurpleA700,
		accent3Color: Colors.deepPurpleA400,
		textColor: Colors.grey900,
		alternateTextColor: Colors.white,
		canvasColor: Colors.white,
		borderColor: Colors.grey300,
		disabledColor: fade(Colors.darkBlack, 0.3)
	}
};

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme);
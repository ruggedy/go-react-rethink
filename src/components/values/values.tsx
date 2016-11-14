import React, { Component } from 'react';
import styles from "./values.scss";
import FontIcon from "material-ui/FontIcon";
import CSSModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {

}

interface State {

}

class Values extends React.Component<Props, State> {
	render() {

		return (
			<div className={styles.mainContainer}>
				<div className="row Grid--gutters">
					<div className="col-md-4">
						<div styleName="icon-container">
							<FontIcon className="fa fa-code" color="#3F51B5" size={100} />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, recusandae.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div styleName="icon-container">
							<FontIcon className="fa fa-comments-o" color="#3F51B5" size={100} />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, recusandae.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div styleName="icon-container">
							<FontIcon className="fa fa-balance-scale" color="#3F51B5" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, recusandae.</p>
						</div>
					</div>
				</div>
				<div styleName="partners">
					<div className="row smallest Grid--gutters">
						<div className="col-md-6">

						</div>
						<div className="col-md-6">
							<h2>Our Partners and Clients</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores dignissimos optio, consequuntur harum minus sit nemo iure veniam inventore! Iste corporis doloremque atque asperiores adipisci possimus accusamus, aut veniam.</p>
							<RaisedButton label="Learn More" primary={true} />
						</div>
					</div>
				</div>
				<div styleName="about">
					<div className="row smallest Grid--gutters">
						<div className="col-md-8">
							<h2>About WeaveeLabs</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores dignissimos optio, consequuntur harum minus sit nemo iure veniam inventore! Iste corporis doloremque atque asperiores adipisci possimus accusamus, aut veniam.</p>
							<RaisedButton label="Contact us" primary={true} />
						</div>
						<div className="col-md-4">

						</div>
					</div>
				</div>
			</div>
		)
	}
}




export default CSSModules(Values, styles);
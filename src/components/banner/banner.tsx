import React, { Component } from 'react';
import styles from "./banner.scss";
import deviceImage from '../../assets/images/device.png';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {

}

interface State {

}

class Banner extends React.Component<Props, State> {
	render() {

		return (
			<div className={styles.mainContainer}>
				<div className={styles.banner} >
					<div className={styles.bannerContent}>
						<img src={deviceImage} alt="" />
						<h2>Get Investor Ready</h2>
					</div>
				</div>
			</div>
		)
	}
}




export default Banner;
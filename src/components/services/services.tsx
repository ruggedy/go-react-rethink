import React, { Component } from 'react';
import styles from "./services.scss";
import FontIcon from "material-ui/FontIcon";
import CSSModules from 'react-css-modules';
import FlatButton from "material-ui/FlatButton";

interface Props {

}

interface State {

}

class Services extends React.Component<Props, State> {
	render() {
		const style = {
			color: "white" 
		}
		return (
			<div styleName="mainContainer" >
				<div styleName="inner-container">
					<div styleName="content">
						<h2>Our Services</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aut tempore possimus obcaecati exercitationem nihil aperiam, quaerat quibusdam dolores pariatur ipsa accusamus quod sed deleniti natus! Magni ut, molestias commodi tempore fugit esse incidunt sint tenetur, magnam, voluptatem blanditiis doloribus neque voluptate ex aspernatur quas dolore qui quaerat optio unde beatae officia adipisci! Magni voluptas ad quis earum, est maxime reiciendis omnis magnam, quas a voluptatum animi molestias, explicabo ea totam sequi amet perspiciatis esse voluptatem dolorum dolorem ab vitae.</p>
						<div className="row Grid--gutters">
							<div className="col-md-6">
								<div styleName="desc-div">
									<h4>Web App Development</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eum praesentium, eveniet error nemo possimus suscipit nisi porro voluptas. Enim ducimus pariatur similique tempore vero unde, voluptatibus fugit odit, velit!</p>
									<div styleName="button-div">
										<FlatButton label="learn more" labelPosition="before" icon={<FontIcon className="fa fa-long-arrow-right" />} style={style} />
									</div>
								</div>
								<div styleName="desc-div">
									<h4>Mobile App Development</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eum praesentium, eveniet error nemo possimus suscipit nisi porro voluptas. Enim ducimus pariatur similique tempore vero unde, voluptatibus fugit odit, velit!</p>
									<div styleName="button-div">
										<FlatButton label="learn more" labelPosition="before" icon={<FontIcon className="fa fa-long-arrow-right" />} style={style} />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div styleName="desc-div">
									<h4>Consulting</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eum praesentium, eveniet error nemo possimus suscipit nisi porro voluptas. Enim ducimus pariatur similique tempore vero unde, voluptatibus fugit odit, velit!</p>
									<div styleName="button-div">
										<FlatButton label="learn more" labelPosition="before" icon={<FontIcon className="fa fa-long-arrow-right" />} style={style} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Services, styles)
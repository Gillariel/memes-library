import * as React from 'react';
import { Router } from 'react-router-dom';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import MemeList from '../routes/meme-list';

import 'react-image-lightbox/style.css';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<MemeList path="/meme/:name" />
				</Router>
			</div>
		);
	}
}

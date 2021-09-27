import React from "react";
import {
BrowserRouter as Router,
Link,
Switch,
Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet, faDice } from '@fortawesome/free-solid-svg-icons'

import './GlobalStyles/App.scss';
import LandingPage from "./Pages/Landing.page";
import Header from "./Components/Header/header";
import SideNav from "./Components/SideNav/sidenav";
import EventGenerator from "./Pages/EventGenerator/EventGenerator.page";

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet, faDice);

function App() {
	return (
		<Router>
			<Header/>
			<div className="site-body">
				<div className="side-nav">
					<SideNav/>
				</div>
				<div className="site-content">
					<Switch>
						<Route path="/gen/event" component={EventGenerator}/>
						<Route path="/" component={LandingPage}/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
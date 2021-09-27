import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import LandingPage from "./Pages/Landing.page";
import Header from "./Components/Header/header";

// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, faCheckSquare, faArrowRight, faArrowLeft, faSpinner, faRetweet);

function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className="site-body">
          <div className="side-nav">

          </div>
          <div className="site-content">
            <Switch>
              <Route path="/" component={LandingPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import "assets/scss/material-kit-react.scss?v=1.8.0";
import { CookiesProvider } from 'react-cookie';

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomePage/HomePage";

import store from './stores/config';
import ViewPhotos from "views/HomePage/ViewPhotosPage";

let hist = createBrowserHistory();

const Customer = () => (
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home-page" component={HomePage} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/components" component={Components} />
            <Route path="/view-photos" component={ViewPhotos} />
          </Switch>
        </Router>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

ReactDOM.render(<Customer />, document.getElementById('root'));
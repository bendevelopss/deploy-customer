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
import App from "./App";

let hist = createBrowserHistory();

const Customer = () => (
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Router history={hist}>
          <Switch>
            <App />
          </Switch>
        </Router>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

ReactDOM.render(<Customer />, document.getElementById('root'));
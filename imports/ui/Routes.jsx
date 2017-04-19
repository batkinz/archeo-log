import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Login from './components/Login/Login.jsx';
import App from './App.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/" component={App} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;

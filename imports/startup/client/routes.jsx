import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '/imports/ui/App.jsx';
import ProjectListItem from '/imports/ui/components/ProjectListItem/ProjectListItem.jsx';

export const renderRoutes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*
                 <IndexRoute component={ProjectListItem} name="Sometownnaghme" location="Far Faraway Straße 1324" />
                 <Route path="about" component={About} />
                 <Route path="inbox" component={Inbox} />
                 */}
            </Route>
        </Router>
    );
}

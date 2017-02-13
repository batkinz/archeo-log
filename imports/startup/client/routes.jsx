import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '/imports/ui/App.jsx';
import NotFound from '/imports/ui/components/NotFound/NotFound.jsx';

export const renderRoutes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*
                 <IndexRoute component={ProjectListItem} name="Sometownnaghme" location="Far Faraway Straße 1324" />
                 <Route path="about" component={About} />
                 <Route path="inbox" component={Inbox} />
                 */}
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    );
}

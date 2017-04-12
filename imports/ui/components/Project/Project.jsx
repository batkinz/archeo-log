import React, { PropTypes } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import ProjectForm from './ProjectForm/ProjectForm.jsx';

const Project = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/add`} render={() => <ProjectForm type="insert" />} />
            <Route
              exact
              path={`${match.url}/:projectId`}
              render={({ match: routeMatch }) => {
                  return (<ProjectForm type="update" docId={routeMatch.params.projectId} />);
              }} />
        </Switch>);
};

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Project;

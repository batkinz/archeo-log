import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import ProjectForm from './ProjectForm/ProjectForm.jsx';
import ObjectList from '../ObjectList/ObjectList.jsx';
import Object from '../Object/Object.jsx';

const Project = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/add`} render={() => <ProjectForm />} />
            <Route
              exact
              path={`${match.url}/:projectId`}
              render={({ match: routeMatch }) => {
                  return (<ObjectList projectId={routeMatch.params.projectId} />);
              }} />
            <Route
              exact
              path={`${match.url}/:projectId/edit`}
              render={({ match: routeMatch }) => {
                  return (<ProjectForm docId={routeMatch.params.projectId} />);
              }} />
            <Route
              path={`${match.url}/:projectId/object/:objectNumber`}
              render={({ match: routeMatch }) => {
                  return (
                      <Object
                        match={routeMatch}
                        projectId={routeMatch.params.projectId}
                        objectNumber={parseInt(routeMatch.params.objectNumber, 10)} />);
              }} />
        </Switch>);
};

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Project;

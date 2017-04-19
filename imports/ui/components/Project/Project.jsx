import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import ProjectForm from './ProjectForm/ProjectForm.jsx';
import ObjectList from '../ObjectList/ObjectList.jsx';
import ObjectForm from '../Object/ObjectForm.jsx';

const Project = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/add`} render={() => <ProjectForm type="insert" />} />
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
                  return (<ProjectForm type="update" docId={routeMatch.params.projectId} />);
              }} />
            <Route
              exact
              path={`${match.url}/:projectId/object/:objectNumber`}
              render={({ match: routeMatch }) => {
                  return (<ObjectForm objectNumber={routeMatch.params.objectNumber} projectId={routeMatch.params.projectId} />);
              }} />
        </Switch>);
};

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Project;

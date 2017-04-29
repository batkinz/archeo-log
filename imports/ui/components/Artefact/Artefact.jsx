import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom';

import ArtefactForm from './ArtefactForm.jsx';
import ArtefactList from '../ArtefactList/ArtefactList.jsx';
const Artefact = ({ match, projectId, objectNumber }) => {
    return (
        <div>
            <div style={{ marginTop: 11 }}>
                <Switch>
                    <Route
                      exact
                      path={`${match.url}/add`}
                      render={() => {
                          return (<ArtefactForm objectNumber={objectNumber} projectId={projectId} />);
                      }} />
                    <Route
                      exact
                      path={`${match.url}/:artefactNumber`}
                      render={({ match: routeMatch }) => {
                          return (
                              <ArtefactForm
                                objectNumber={objectNumber}
                                projectId={projectId}
                                artefactNumber={routeMatch.params.artefactNumber} />);
                      }} />
                    <Route
                      exact
                      path={`${match.url}`}
                      render={({ match: routeMatch }) => {
                          return (
                              <ArtefactList match={routeMatch} objectNumber={objectNumber} projectId={projectId} />
                          );
                      }} />
                </Switch>
            </div>
        </div>);
};

Artefact.propTypes = {
    match: PropTypes.object.isRequired,
    projectId: PropTypes.string.isRequired,
    objectNumber: PropTypes.number.isRequired,
};

export default Artefact;

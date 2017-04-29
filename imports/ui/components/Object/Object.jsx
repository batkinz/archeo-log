import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom';

import ObjectMenu from './ObjectMenu/ObjectMenu.jsx';
import ObjectForm from './ObjectForm.jsx';
import Artefact from '../Artefact/Artefact.jsx';
import GraveForm from '../Grave/GraveForm.jsx';

const Object = ({ match, projectId, objectNumber }) => {
    return (
        <div>
            <ObjectMenu baseUrl={`${match.url}`} />
            <div style={{ marginTop: 11 }}>
                <Switch>
                    <Route
                      exact
                      path={`${match.url}/edit`}
                      render={() => {
                          return (<ObjectForm objectNumber={objectNumber} projectId={projectId} />);
                      }} />
                    <Route
                      exact
                      path={`${match.url}/grave`}
                      render={() => {
                          return (<GraveForm objectNumber={objectNumber} projectId={projectId} />);
                      }} />
                    <Route
                      path={`${match.url}/artefacts`}
                      render={({ match: routeMatch }) =>
                          <Artefact match={routeMatch} objectNumber={objectNumber} projectId={projectId} />} />
                </Switch>
            </div>
        </div>);
};

Object.propTypes = {
    match: PropTypes.object.isRequired,
    projectId: PropTypes.string.isRequired,
    objectNumber: PropTypes.number.isRequired,
};

export default Object;

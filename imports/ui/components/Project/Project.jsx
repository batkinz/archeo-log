import React, { PropTypes } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import ProjectForm from './ProjectForm/ProjectForm.jsx';

const Project = ({ match, doc, ready }) => {
    if (ready) {
        return (
            <Switch>
                <Route exact path={`${match.url}/add`} render={() => <ProjectForm type="insert" />}/>
                <Route exact path={`${match.url}/:projectId`}
                       render={() => <ProjectForm type="update" doc={doc} />}/>
            </Switch>);
    }
    return (<div>Loading...</div>);
};

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

// THIS NEEDS TO BE MOVED TO ProjectForm
export default createContainer(({ match }) => {
    const subHandle = Meteor.subscribe('projektek');

    let project = null;
    console.log(match);
    if (match.params.projectId) {
        project = Projects.findOne({ _id: match.params });
        console.log(project);
    }
    return {
        doc: project,
        ready: subHandle,
    };
}, Project);

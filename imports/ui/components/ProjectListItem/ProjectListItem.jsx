import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { ProjectListItemStyle } from './ProjectListItem.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';


class MenuButton extends Component {
    render() {
        return (
            <button
              type="button"
              className="btn btn-default btn-lg"
              key="projectListItemMenuButton"
              style={this.props.style}>
                <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
        );
    }
}

MenuButton.propTypes = {
    style: PropTypes.object.isRequired,
};

MenuButton = Radium(MenuButton);


class Header extends Component {
    render() {
        return (
            <div>
                <span style={this.props.style.name}>{this.props.name}</span>
                <span style={this.props.style.location}>{this.props.location}</span>
            </div>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

Header = Radium(Header);


class ActionButtons extends Component {
    render() {
        return (
            <div className="row" style={this.props.style.container}>
                <div style={this.props.style.cols}>
                    <button
                      type="button"
                      className="btn btn-default btn-lg"
                      key="projectListItemDetailsButton"
                      style={[
                          this.props.style.common,
                          this.props.style.detailsButton,
                      ]}
                      onClick={this.props.detailsCallback}>
                    </button>
                </div>
                <div style={this.props.style.cols}>
                    <button
                      type="button"
                      className="btn btn-default btn-lg"
                      key="projectListItemDoneButton"
                      style={[
                          this.props.style.common,
                          this.props.style.doneButton,
                      ]}
                      onClick={this.props.doneCallback}>
                    </button>
                </div>
                <div style={this.props.style.cols}>
                    <button
                      type="button"
                      className="btn btn-default btn-lg"
                      key="projectListItemDeleteButton"
                      style={[
                          this.props.style.common,
                          this.props.style.deleteButton,
                      ]}
                      onClick={this.props.deleteCallback}>
                    </button>
                </div>
            </div>
        );
    }
}

ActionButtons.propTypes = {
    style: PropTypes.object.isRequired,
    detailsCallback: React.PropTypes.func,
    doneCallback: React.PropTypes.func,
    deleteCallback: React.PropTypes.func,
};

ActionButtons = Radium(ActionButtons);


class DateDisplay extends Component {
    constructor(props) {
        super(props);

        this.year = props.date.getFullYear();
        this.month = props.date.getMonth();
        this.day = props.date.getDate();
    }

    render() {
        return (
            <div style={this.props.style}>
                <span>{this.day} {this.month} {this.year}</span>
            </div>
        );
    }
}

DateDisplay.propTypes = {
    style: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
};

DateDisplay = Radium(DateDisplay);


class ProjectListItem extends Component {
    constructor(props) {
        super(props);
        this.handleDetailsButton = this.handleDetailsButton.bind(this);
        this.handleDoneButton = this.handleDoneButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);        
    }

    handleDetailsButton() {
        console.log('DetailsButton handler');
    }

    handleDoneButton() {
        console.log('DoneButton handler');
    }

    handleDeleteButton() {
        console.log('DeleteButton handler');
    }

    render() {
        const style = getStyle(this.props.style, ProjectListItemStyle.style);

        return (
            <div
              className="panel panel-default"
              style={[
                  style.common.rounding,
                  style.common.table,
                  style.common.height68]}>
                <div
                  className="panel-body"
                  style={[
                      style.common.height68,
                      style.panelBody]}>
                    <div className="row" style={[style.common.height46, style.row]}>
                        <div
                          style={[
                              style.common.tableCell,
                              style.menuButtonCell]}>
                            <MenuButton style={style.menuButton} />
                        </div>
                        <div
                          style={[
                              style.common.tableCell,
                              style.titleCell]}>
                            <Header
                              name={this.props.project.name} location={this.props.project.location}
                              style={style.header} />
                        </div>
                        <div
                          style={[
                              style.common.tableCell,
                              style.dateCell]}>
                            <DateDisplay style={style.date} date={this.props.project.date} />
                        </div>
                        <div
                          style={[
                              style.common.tableCell,
                              style.actionButtonsCell]}>
                            <ActionButtons
                              style={style.actionButtons}
                              detailsCallback={this.handleDetailsButton}
                              doneCallback={this.handleDoneButton}
                              deleteCallback={this.handleDeleteButton} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectListItem.propTypes = {
    project: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default Radium(ProjectListItem);

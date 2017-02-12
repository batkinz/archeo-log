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
                <div className="col-md-4" style={this.props.style.cols}>
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
                <div className="col-md-4" style={this.props.style.cols}>
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
                <div className="col-md-4" style={this.props.style.cols}>
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
        if (!this.props.loading) {
            return (
                <div
                  className="panel panel-default"
                  style={[
                      this.props.style.common.rounding,
                      this.props.style.common.table,
                      this.props.style.common.height68]}>
                    <div
                      className="panel-body"
                      style={[
                          this.props.style.common.height68,
                          this.props.style.panelBody]}>
                        <div className="row" style={[this.props.style.common.height46, this.props.style.row]}>
                            <div
                              className="col-sm-1"
                              style={[
                                  this.props.style.common.tableCell,
                                  this.props.style.buttonCell]}>
                                <MenuButton style={this.props.style.menuButton} />
                            </div>
                            <div className="col-sm-5" style={[this.props.style.common.tableCell]}>
                                <Header
                                  name={this.props.name} location={this.props.location}
                                  style={this.props.style.header} />
                            </div>
                            <div className="col-sm-3" style={[this.props.style.common.tableCell]}>
                                <DateDisplay style={this.props.style.date} date={this.props.date} />
                            </div>
                            <div
                              className="col-sm-3"
                              style={[
                                  this.props.style.common.tableCell,
                                  this.props.style.actionButtonsCell]}>
                                <ActionButtons
                                  style={this.props.style.actionButtons}
                                  detailsCallback={this.handleDetailsButton}
                                  doneCallback={this.handleDoneButton}
                                  deleteCallback={this.handleDeleteButton} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

ProjectListItem.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default createContainer(() => {
    const subHandle = Meteor.subscribe('styles');

    const commonStyles = getStyle(Styles.findOne({ targetComponent: 'Common' }), CommonStyle);
    const localStyles = getStyle(Styles.findOne({ targetComponent: 'ProjectListItem' }), ProjectListItemStyle);
    return {
        loading: !subHandle.ready(),
        style: Object.assign({}, commonStyles.style, localStyles.style),
        date: new Date(2017, 2, 10),
    };
}, Radium(ProjectListItem));

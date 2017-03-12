import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ButtonStyle } from './Button.style.js';

class Button extends Component {
    constructor(props) {
        super(props);

        if (this.props.handleClick) {
            this.handleClick = this.props.handleClick.bind(this);
        }
    }
    render() {
        let classes = { 'btn': true, 'btn-default': true };
        let style = Object.assign({}, this.props.privStyle.button, this.props.style);
        let dropdownItemsContainer = false;
        let caret = false;
        const extraAttributes = {};

        if (this.props.type) {
            if (this.props.type.yellow) {
                style = Object.assign({}, style, this.props.privStyle.yellowButton);
            }
            if (this.props.type.dropdown) {
                classes['dropdown-toggle'] = true;
                const dropdownItems = _.map(this.props.type.dropdownItems, item => {
                    return (
                        <li key={item.id}><a href={item.href || '#'}>{item.text}</a></li>
                    );
                });

                dropdownItemsContainer = <ul className="dropdown-menu">{dropdownItems}</ul>;

                extraAttributes['data-toggle'] = 'dropdown';
                extraAttributes['aria-haspopup'] = 'true';
                extraAttributes['aria-expanded'] = 'false';

                caret = <span className="caret"></span>;
            }
        }

        classes = classNames(classes);

        return (
            <div className="btn-group">
                <button
                  type="button"
                  className={classes}
                  style={style}
                  onClick={this.handleClick}
                  {...extraAttributes}>
                    {this.props.text} {caret}
                </button>
                {dropdownItemsContainer}
            </div>
        );
    }
}

Button.propTypes = {
    privStyle: PropTypes.object,
    style: PropTypes.object,
    text: PropTypes.string,
    handleClick: PropTypes.func,
    type: PropTypes.object,
};

export default createContainer(() => {
    return {
        privStyle: getStyle('Button', ButtonStyle.style),
    };
}, Radium(Button));

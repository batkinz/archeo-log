/**
 * Created by bence on 2017.04.13..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

const common = CommonStyle.style.common;

export const ObjectListMenuStyle = {
    targetComponent: 'ObjectListMenu',
    style: {
        container: {
            backgroundColor: common.colors.lightestGray.backgroundColor,
            height: 68,
            width: '100%',
            paddingTop: 11,
            fontSize: 32,
        },
        objectNumberInput: {
            width: 86,
            display: 'inline',
            fontSize: 32,
            height: 46,
            marginRight: 11,
            marginLeft: 11,
            paddingLeft: 6,
            paddingRight: 6,
        },
        addButton: {
            minWidth: 46,
            width: 46,
            backgroundColor: common.colors.darkGray.backgroundColor,
            ':focus': {
                outline: 0,
                backgroundColor: common.colors.darkGray.backgroundColor,
            },
            ':hover': {
                backgroundColor: common.colors.lighterGray.backgroundColor,
            },
            padding: 0,
            marginTop: -8,
        },
        plusSign: {
            color: common.colors.white.backgroundColor,
            fontSize: 32,
            marginTop: 4,
        },
    },
};

DefaultStylesContainer.addStyle(ObjectListMenuStyle);

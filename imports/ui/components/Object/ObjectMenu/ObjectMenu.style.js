/**
 * Created by bence on 2017.04.25..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

const common = CommonStyle.style.common;

const buttonCommon = {
    backgroundColor: common.colors.darkGray.backgroundColor,
    color: common.colors.white.backgroundColor,
    marginLeft: 5.5,
    marginRight: 5.5,
    ':focus': {
        backgroundColor: common.colors.darkGray.backgroundColor,
        outline: 0,
    },
    ':active': {
        backgroundColor: common.colors.darkGray.backgroundColor,
        outline: 0,
    },
};

export const ObjectMenuStyle = {
    targetComponent: 'ObjectMenu',
    style: {
        container: {
            backgroundColor: common.colors.lightestGray.backgroundColor,
            height: 68,
            width: '100%',
            paddingTop: 11,
            fontSize: 32,
        },
        backButton: Object.assign({}, buttonCommon, {
            minWidth: 48,
        }),
        menuButton: Object.assign({}, buttonCommon, {
            minWidth: 144,
        }),
        backArrow: {
            fontSize: 32,
            color: common.colors.white.backgroundColor,
        },
    },
};

DefaultStylesContainer.addStyle(ObjectMenuStyle);

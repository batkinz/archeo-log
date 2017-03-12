/**
 * Created by bence on 2017.03.12..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

const common = CommonStyle.style.common;

export const ButtonStyle = {
    targetComponent: 'Button',
    style: {
        button: {
            height: 46,
            minWidth: 96,
            fontSize: 19,
            border: 0,
            ':focus': {
                outline: 0,
                backgroundColor: common.colors.white.backgroundColor,
            },
            ':hover': {
                backgroundColor: common.colors.lightestGray.backgroundColor,
            },
        },
        yellowButton: {
            backgroundColor: common.colors.yellow.backgroundColor,
            ':focus': {
                outline: 0,
                backgroundColor: common.colors.yellow.backgroundColor,
            },
        },
    },
};

DefaultStylesContainer.addStyle(ButtonStyle);

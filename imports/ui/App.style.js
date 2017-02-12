import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

export const AppStyle = {
    targetComponent: 'App',
    style: {
        container: {
            width: 846,
        },
        version: {
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: CommonStyle.style.common.colors.lightestGray.backgroundColor,
            opacity: 0.5,
            color: '#000',
            userSelect: 'none',
        },

    },
};

DefaultStylesContainer.addStyle(AppStyle);

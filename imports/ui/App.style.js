import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

export const AppStyle = {
    targetComponent: 'App',
    style: {
        appContainer: {
            paddingLeft: 0,
            paddingRight: 0,
            margin: 'auto',
            width: 1024,
        },
        pageContainer: {
            width: 846,
            height: '100%',
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

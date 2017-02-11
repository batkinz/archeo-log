import { DefaultStylesContainer } from '/imports/ui/common/DefaultStylesContainer.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

export const AppStyle = {
    targetComponent: 'App',
    style: {
        width: 846,
        backgroundColor: CommonStyle.style.common.colors.darkGray,
    },
};

DefaultStylesContainer.addStyle(AppStyle);

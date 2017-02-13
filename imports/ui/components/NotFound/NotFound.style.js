/**
 * Created by bence on 2017.02.13..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

export const NotFoundStyle = {
    targetComponent: 'NotFound',
    style: {
        color: CommonStyle.style.common.colors.white.backgroundColor,
        fontSize: '48pt',
        textAlign: 'center',
        margin: 'auto',
        height: '100%',
        width: '100%',
    },
};

DefaultStylesContainer.addStyle(NotFoundStyle);

/**
 * Created by bence on 2017.04.13..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

const common = CommonStyle.style.common;

export const ObjectListItemStyle = {
    targetComponent: 'ObjectListItem',
    style: {
        container: {
            width: 68,
            height: 68,
            backgroundColor: common.colors.white.backgroundColor,
            fontSize: 38,
            textAlign: 'center',
            marginLeft: 22,
            marginRight: 22,
            marginTop: 11,
            marginBottom: 11,
            paddingTop: 5,
            borderRadius: 3,
            float: 'left',
        },
    },
};

DefaultStylesContainer.addStyle(ObjectListItemStyle);

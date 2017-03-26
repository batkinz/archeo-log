/**
 * Created by bence on 2017.03.05..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

const common = CommonStyle.style.common;

export const MainMenuStyle = {
    targetComponent: 'MainMenu',
    style: {
        container: {
            backgroundColor: common.colors.white.backgroundColor,
            height: 80,
        },
        logo: {
            position: 'relative',
            float: 'left',
            backgroundImage: 'url(/archeolog.svg), none',
            backgroundRepeat: 'no-repeat',
            width: 192,
            height: 24,
            top: 28,
            left: 67,
        },
        separator: {
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderRightWidth: 2,
            borderBottomWidth: 0,
            borderColor: common.colors.lightestGray.backgroundColor,
            borderStyle: 'solid',
            height: 46,
        },
        leftSeparatorContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 89,
            height: 46,
        },
        projectsButtonContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 111,
        },
        settingsButtonContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 133,
        },
        addressesButtonContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 155,
        },
        rightSeparatorContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 177,
            height: 46,
        },
        langSelectButtonContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 199,
        },
        langSelectDropdownContainer: {
            float: 'left',
            position: 'relative',
            top: 17,
            left: 201,
        },
        userNameContainer: {
            float: 'left',
            position: 'relative',
            top: 20,
            left: 223,
        },
        subStyles: {
            userNameContainer: {
                div: {
                    margin: -5,
                    fontSize: 19,
                    width: 80,
                },
            },
        },
    },
};

DefaultStylesContainer.addStyle(MainMenuStyle);

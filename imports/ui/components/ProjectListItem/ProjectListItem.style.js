/**
 * Created by bence on 2017.02.10..
 */
import { DefaultStylesContainer } from '/imports/ui/common/StyleHelpers.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

export const ProjectListItemStyle = {
    targetComponent: 'ProjectListItem',
    style: {
        panelBody: {
            paddingTop: 11,
            paddingRight: 11,
            paddingBotton: 11,
            paddingLeft: 11,
        },
        row: {
            whiteSpace: 'nowrap',
            overflow: 'overflow-x',
        },
        menuButtonCell: {
            paddingLeft: 11,
            paddingRight: 11,
            width: 68,
        },
        titleCell: {
            width: '40%',
        },
        dateCell: {
            width: '30%',
        },
        actionButtonsCell: {
            width: '20%',
        },
        header: {
            name: {
                fontSize: 24,
                fontWeight: '500',
                display: 'block',
                marginTop: -5,
                width: 320,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            location:
            {
                fontSize: 16,
                fontWeight: 'normal',
                display: 'block',
                width: 320,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        },
        menuButton: {
            /* source: http://bootsnipp.com/snippets/featured/circle-button */
            width: 44,
            height: 44,
            paddingTop: 10,
            paddingRight: 12.5,
            paddingBottom: 10,
            paddingLeft: 12.5,
            fontSize: 18,
            lineHeight: 1,
            borderRadius: 22,
            ':focus': {
                outline: 0,
                backgroundColor: CommonStyle.style.common.colors.white.backgroundColor,
            },
            ':hover': {
                outline: 0,
                backgroundColor: CommonStyle.style.common.colors.white.backgroundColor,
            },
        },
        date: {
            fontSize: '24pt',
        },
        actionButtons: {
            common: {
                height: 46,
                width: 46,
                ':focus': {
                    outline: 0,
                },
            },
            container: {
                float: 'right',
            },
            cols: {
                paddingLeft: 11,
                paddingRight: 11,
                width: '33.33%',
                display: 'inline-block',
            },
            detailsButton: {
                backgroundColor: CommonStyle.style.common.colors.red.backgroundColor,
            },
            doneButton: {
                backgroundColor: CommonStyle.style.common.colors.turquoise.backgroundColor,
            },
            deleteButton: {
                backgroundColor: CommonStyle.style.common.colors.turquoise.backgroundColor,
            },
        },
    },
};

DefaultStylesContainer.addStyle(ProjectListItemStyle);

/**
 * Created by bence on 2017.02.10..
 */
import { DefaultStylesContainer } from '/imports/ui/common/DefaultStylesContainer.js';

export const CommonStyle = {
    targetComponent: 'Common',
    style: {
        common: {
            rounding: { borderRadius: 3 },
            table: {
                marginTop: 11,
                // display: 'table',
                width: '100%',
            },
            tableCell: {
                display: 'inline-block',
                verticalAlign: 'middle',
                paddingTop: 0,
                paddingBottom: 0,
            },
            height68: { height: 68 },
            height46: { height: 46 },
            noPadding: {
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
            colors: {
                darkGray: {
                    backgroundColor: '#4d4d4d',
                },
                lighterGray: {
                    backgroundColor: '#cccccc',
                },
                lightestGray: {
                    backgroundColor: '#e1e1e1',
                },
                yellow: {
                    backgroundColor: '#fbdb00',
                },
                red: {
                    backgroundColor: '#fb6d30',
                },
                turquoise: {
                    backgroundColor: '#00f2ae',
                },
            },
        },
    },
};

DefaultStylesContainer.addStyle(CommonStyle);

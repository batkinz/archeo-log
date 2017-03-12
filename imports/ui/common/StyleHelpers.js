/**
 * Created by bence on 2017.02.10..
 */
import { Styles } from '/imports/api/styles/styles.collection.js';

class DefaultStylesContainerClass {
    addStyle(style) {
        if (typeof this.styles === 'undefined') {
            this.styles = [];
        }
        this.styles.push(style);
    }
    getStyleList() {
        return this.styles || [];
    }
}

const USELOCALSTYLE = true;

export const getStyle = (databaseStyle, localRadiumObject) => {
    if (typeof databaseStyle === 'string') {
        databaseStyle = Styles.findOne({ targetComponent: databaseStyle },
            { transform: doc => { return doc.style; } });
    }

    return USELOCALSTYLE ? (localRadiumObject || databaseStyle) : (databaseStyle || localRadiumObject);
};

export const DefaultStylesContainer = new DefaultStylesContainerClass();

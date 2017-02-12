/**
 * Created by bence on 2017.02.10..
 */
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

const DEVEL = true;

export const getStyle = (databaseStyle, localRadiumObject) => {
    return DEVEL ? localRadiumObject : databaseStyle;
};

export const DefaultStylesContainer = new DefaultStylesContainerClass();

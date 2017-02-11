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

export const DefaultStylesContainer = new DefaultStylesContainerClass();

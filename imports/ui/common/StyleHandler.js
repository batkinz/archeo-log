/**
 * Created by bence on 2017.02.11..
 */
import { Styles } from '/imports/api/styles/styles.collection';

class StyleHandlerClass {
    constructor() {
        this.subHandle = Meteor.subscribe('styles');
        this.ready = this.ready.bind(this);
    }
    ready() {
        return this.subHandle.ready();
    }
    getStyle(styleTargetComponent, localRadiumObject) {
        return Styles.findOne({ targetComponent: styleTargetComponent }) || localRadiumObject;
    }
}

export const StyleHandler = new StyleHandlerClass();

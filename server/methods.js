/**
 * Created by bence on 2017.02.12..
 */
Meteor.methods({
    getVersion() {
        const synchronousGetText = Meteor.wrapAsync(Assets.getText);
        return synchronousGetText('version');
    },
});

/**
 * Created by bence on 2017.04.19..
 */
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
    hideSignUpLink: true,
    showLabels: false,
    showPlaceholders: false,

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 1000,

    // Texts
    texts: {
        button: {
            signIn: 'Login',
        },
        title: {
            signIn: '',
        },
    },
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
});

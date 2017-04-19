/**
 * Created by bence on 2017.04.19..
 */

export function createDefaultUser() {
    const userData = [
        {
            username: 'aladar',
            password: 'regesz1111',
            profile: {
                firstName: 'Aladár',
                lastName: 'Mézga',
            },
        },
    ];

    _.each(userData, user => {
        Accounts.createUser(user);
    });
}

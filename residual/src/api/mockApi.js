import _ from 'lodash';

const users = [
    {
        id: 1,
        username: 'mannie@ls.com',
        password: 'password',
    }
];

export function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let user = _.find(users, user => {
        return user.username === username;
    });
    if(user && user.password === password) {
        resolve(Object.assign({}, user));
    }
    else reject(`Wrong login credentials`);
        }, 500);
    });
}
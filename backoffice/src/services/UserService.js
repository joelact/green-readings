import User from './model/User';

export default class UserService {
    async login(username, password) {
        const user = new User();
        sessionStorage.setItem('user', JSON.stringify(user));
        return user;
    }

    getUser() {
        const user = sessionStorage.getItem('user');

        console.log(JSON.parse(user));

        if (!user) {
            return new Error('No user');
        }

        return User.fromJSON(user);
    }
}

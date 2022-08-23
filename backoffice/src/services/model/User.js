export default class User {
    constructor() {
        this.username = 'joelact';
        this.email = 'joel@email.com';
        this.session = 'session';
    }

    static fromJSON(json) {
        const convertion = JSON.parse(json);
        const user = new User();

        user.username = convertion.username;
        user.email = convertion.email;
        user.session = convertion.session;

        return user;
    }
}

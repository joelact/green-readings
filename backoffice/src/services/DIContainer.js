import UserService from './UserService';

class DIContainer {
    constructor() {
        this.userService = new UserService();
    }

    getUserService() {
        return this.userService;
    }
}

export default new DIContainer();

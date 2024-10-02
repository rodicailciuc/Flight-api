import { v4 as Id } from 'uuid';

const users = [];

class User {
    static getByEmail(email) {
        return users.find((user) => user.email === email);
    }
    static add(user) {
        const emailExists = users.find((u) => u.email === user.email);
    if (emailExists) {
        throw new Error('User with this email already exists');
    }
        const newUser = {
            id: Id(),
            ...user
        };
        users.push(newUser);
        return newUser;
    }
}

export default User;
const v_database = require('v_database');

const user = {
    
    register: async (data) => {
        const { username, password, email, firstName, lastName } = data;
        const $user = await user.byUsername(username);
        if ($user) {
            return {
                success: false,
                message: 'Username already exists'
            };
        }
        const newUser = await user.make({
            username,
            password,
            email,
            firstName,
            lastName
        });
        return {
            success: true,
            message: 'User created',
            user: newUser
        };
    },

    make: async (data) => {
        const { username, password, email, firstName, lastName } = data;
        const user = await v_database.item.new('users', {
            username,
            password,
            email,
            firstName,
            lastName
        }, username);
        return user;
    },

    byUsername: async (username) => {
        return await user.one({id: username});
    },

    byId: async (id) => {
        return await user.one({id});
    },

    all: async () => {
        return await v_database.type.view('users');
    },

    one: async (options) => {
        return await v_database.item.view('users', options);
    }

};

module.exports = user;



const v_database = require('v_database');

const userModel = {
    
    register: async (data) => {
        const { username, password, email, firstName, lastName } = data;
        const user = await userModel.getByUsername(username);
        if (user) {
            return {
                success: false,
                message: 'Username already exists'
            };
        }
        const newUser = await userModel.create({
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

    create: async (data) => {
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

    getByUsername: async (username) => {
        return await userModel.findOne({id: username});
    },

    getById: async (id) => {
        return await userModel.findOne({id});
    },

    getAll: async () => {
        return await v_database.type.view('users');
    },

    findOne: async (options) => {
        return await v_database.item.view('users', options);
    }
    
};

module.exports = userModel;


checkUser = async () => {
    console.log(await userModel.getAll());
    console.log(await userModel.register({ username: '.-v-.', password: '123456789', email: 'slavko.vuletic92@gmail.com', firstName: 'Slavko', lastName: 'Vuletic' }));
    console.log(await userModel.getAll());
};

checkUser();

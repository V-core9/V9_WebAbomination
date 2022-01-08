module.exports = async (username, email) => {
    return {
        owner: username,
        email: email,
        created_at: new Date(),
        updated_at: new Date(),
        status: 'active',
        verified: false
    };
};

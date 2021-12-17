const $admin = (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }
};

module.exports = $admin;

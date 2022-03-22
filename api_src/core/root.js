module.exports = async (req, res) => {
    res.send(`
            <h2>Welcome To V-core9 API</h2>
            <p>This is root of the V-core9 API.</p>
            <p>Check these links for API by Version:</p>
            <ul>
                <li>
                    <a href="/api/v1/"><[ /api/v1/ ]></a>
                </li>
            </ul>
            `);
};

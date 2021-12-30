module.exports = async (req, res) => {
    const slug = req.url;
    console.log(slug);
    res.end(slug);
};

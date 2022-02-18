const errors = {
    '404': async (req, res) => res.status(404).end(`[$)$] : ERROR 404 > \nPATH: ${req.path}\nMETHOD: ${req.method}\nPARAMS: ${JSON.stringify(req.params)}`),
}

module.exports = errors;
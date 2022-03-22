const routes = {};

const router = {
    routes: routes,
    add: async (path, type, exec = []) => {
        if (routes[path] === undefined) {
            routes[path] = {
                [type]: exec
            };
        } else {
            routes[path][type] = exec;
        }
    },
    new: async (path, type, exec) => router.add(path, type, exec),
};

module.exports = router;

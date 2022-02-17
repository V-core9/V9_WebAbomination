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
    get: async (path, exec) => router.add(path, "get", exec),
    post: async (path, exec) => router.add(path, "post", exec),
    put: async (path, exec) => router.add(path, "put", exec),
    delete: async (path, exec) => router.add(path, "delete", exec),
};

module.exports = router;

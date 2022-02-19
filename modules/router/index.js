const routes = {};
const middleware = [];

const router = {
  routes: routes,
  middleware: middleware,
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

  use: async (exec) => {
    if (typeof exec === "function") {
      try {
        middleware.push(exec);
        return true;
      } catch ( err) {
        console.log(err);
        return false;
      }
    } else {
      return new Error("Middleware must be a function");
    }
  },
};

module.exports = router;

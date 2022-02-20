const routes = {};
const middleware = [];


const fs = require('fs');

const router = {
  routes: routes,
  middleware: middleware,
  statics: require('./statics'),

  settings: {
    statics: { etag: false, maxAge: 3600 },
  },

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
    switch (typeof exec) {

      case "function":
        try {
          middleware.push(exec);
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
        break;

      case "string":
        try {
          return statics.push(exec) ? true : false;
        } catch (err) {
          console.log(err);
          return false;
        }
        break;

      default:
        new Error("Middleware must be a function or string [dir path]");
        break;

    }
  },
};

module.exports = router;

module.exports = {
  $_port : 2000,
  $_static_dir: "public",
  $_hostname: "localhost",
  $_protocol: "http",
  getLocation () {
    return `${this.$_protocol}://${this.$_hostname}:${this.$_port}/`;
  }
};

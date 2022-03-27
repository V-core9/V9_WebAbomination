module.exports = {

  access: {
    secret: process.env.ACCESS_JWT_SECRET,
    expires: "5m"
  },

  refresh: {
    secret: process.env.REFRESH_JWT_SECRET,
    expires: '7d'
  }

};

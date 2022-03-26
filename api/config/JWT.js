module.exports = {
  secret: {
    access: process.env.ACCESS_JWT_SECRET,
    refresh: process.env.REFRESH_JWT_SECRET
  },
  expires: "5m"
};

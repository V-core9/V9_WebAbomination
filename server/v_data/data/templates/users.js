module.exports = (data) => {
  try {
    return {
      username: data.username,
      password: data.password,
      role: data.role
    };
  } catch (error) {
    //console.error(error);
    return false;
  }
};

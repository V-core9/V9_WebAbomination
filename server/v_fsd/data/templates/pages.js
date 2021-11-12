module.exports = (data) => {
  try {
    return {
      title: data.title,
      path: data.path,
      description: data.description,
      status: data.status,
      created_ts: Date.now(),
      author: data.author
    };
  } catch (error) {
    //console.error(error);
    return false;
  }
};


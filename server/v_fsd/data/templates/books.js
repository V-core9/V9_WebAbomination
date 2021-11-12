module.exports = (data) => {
  try {
    return {
      author: data.author,
      country: data.country,
      language: data.language,
      pages: data.pages,
      title: data.title,
      year: data.year,
    };
  } catch (error) {
    //console.error(error);
    return false;
  }
};


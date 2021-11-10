module.exports = (data) => {
  return `{
    "Application": {
      "name": "V-core9.com",
      "description": "<]_V_[> Website Runner : v-core9.com",
      "version": 11111,
      "data_folder": "${data.dataDir}"
    },
    "Author": {
      "name": "-v-",
      "url": "#"
    },
    "main_todo_file": "todo_main.json",
    "main_notes_file": "notes_main.json"
  }`;
};


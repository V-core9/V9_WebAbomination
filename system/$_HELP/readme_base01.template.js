const description = require('./readme_base01.description');
const folders = require('./readme_base01.folders');
const install = require('./readme_base01.install');

const main_readme_template = {
    file_name: "README.md",
    scroll_title: "🧾 V_Scrolls - README.md",
    scroll_info: "Basically generates MD files...so a Markdown generator...pack data where ever you want and just use this to organize it how file will be printed.",
    layout: [
        description,
        install,
        folders
    ],
    output: "./"
};

module.exports = main_readme_template;

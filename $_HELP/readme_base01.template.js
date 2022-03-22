const description = require('./readme_base01.description');
const folders = require('./readme_base01.folders');
const install = require('./readme_base01.install');

const main_readme_template = {
    file_name: "README.md",
    scroll_title: "🚀 V9_WebAbomination",
    scroll_info: "Custom solution that uses bunch of custom stuff just to show custom things. Yea! :D  \n## Badges \n[![CodeQL](https://github.com/V-core9/V9_WebAbomination/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/V-core9/V9_WebAbomination/actions/workflows/codeql-analysis.yml) [![OSSAR](https://github.com/V-core9/V9_WebAbomination/actions/workflows/ossar-analysis.yml/badge.svg)](https://github.com/V-core9/V9_WebAbomination/actions/workflows/ossar-analysis.yml) [![njsscan sarif](https://github.com/V-core9/V9_WebAbomination/actions/workflows/njsscan-analysis.yml/badge.svg)](https://github.com/V-core9/V9_WebAbomination/actions/workflows/njsscan-analysis.yml)",
    layout: [
        description,
        install,
        folders
    ],
    output: "./"
};

module.exports = main_readme_template;

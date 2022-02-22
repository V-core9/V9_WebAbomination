const { asy } = require('../helpers');

module.exports = vCore9 = async (data) => {
  const { title, content } = data;
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <script>
        ${await asy.stringifyJSON(content)}
      </script>
    </body>
  </html>`;
};

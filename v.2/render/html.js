module.exports = vCore9 = async (data) => {
  const { title, content } = data;
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <title>${title}</title>
      <meta name="description" content="${title}">
    </head>
    <body>
        ${content}
    </body>
  </html>`;
};


const config = require('../../../config');

module.exports = async (req, res, data) => {
    data.config = config;
    return `<v_page> 
                <hero>
                    <v_logo></v_logo>
                    <h3>Render_Mode: <strong><] SSR [></strong></h3>
                    <h1>${data.page.title}</h1>
                    <h2>${data.page.meta.description}</h2>
                    <h3>IP: ${data.ip}</h3>
                </hero>
            </v_page>
        `;
};

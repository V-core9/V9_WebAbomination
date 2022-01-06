
const vDB = require('v_database');

generate_sitemap = async (type, output, index)=>{
    const v_sitemap = require('v_sitemap');
    const pages = await vDB.item.view(type);
    var DEMO_DATA = [];
    for (var i = 0; i < pages.length; i++) {
        DEMO_DATA.push(await vDB.item.view(type, pages[i]));
    }

    //? Example styled map
    const myStyledMap = {
        data: DEMO_DATA,
        index: index,
        output: output,
        stylesheet:  "v-core9.com/style/XSL/sitemap.xsl"
    };
    // Guess It has to be online to work with stylesheet cuz it's working once I put it online.
    console.log(await v_sitemap(myStyledMap));
    
};

page_sitemap = async ()=>{
    await generate_sitemap('pages', "public/pages_sitemap.xml", false);
};

post_sitemap = async ()=>{
    await generate_sitemap('posts', "public/posts_sitemap.xml", false);
};

regenerate_sitemap = async (req, res) => {
    await page_sitemap();
    await post_sitemap();
    res.send('Sitemap Generate Successfully.');
};

module.exports = regenerate_sitemap;

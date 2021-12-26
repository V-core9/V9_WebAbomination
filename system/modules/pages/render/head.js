const render_head = async (data) => { 
    return `<head>
    <meta charset="${data.config.charset}">
    <meta http-equiv="Content-Security-Policy" content="${data.config.ContentSecurityPolicy}">
    <meta http-equiv="Object-Security-Policy" content="${data.config.ObjectSecurityPolicy}">
    <meta name="viewport" content="${data.config.viewport}">
    <link rel="icon" type="image/x-icon" href="/logo.svg">
    <meta name='Vc9_Page'  content='${data.name}'>
    <script type="text/javascript" src="/js/v_app.js"></script>

    
    <style>
        * {
            margin: 0;
            padding: 0;
            line-height: 1em;
        }
        body {
            background: #102030;
            color: white;
        }
        v_block {
            margin: 1em;
            display: flex;
            flex-direction: column;
            box-shadow: 0 5px 5px #10203010;
        }
        
        v_block header {
            padding: 0.5em 1em;
            font-size: 1.25em;
            background: #ebebeb;
            color: #545454;
            z-index: 10;
        }
        v_block box {
            display: flex;
            flex-direction: column;
            padding: 1em;
            gap: 0.25em;
            background: #80808014;
            /* box-shadow: 0 0 10px black; */
        }
        v_block box item {
            background: #ebebeb;
            padding: 0.5em 1em;
            color: #505050;
        }
        v_block box item name {
            font-weight: bold;
            overflow-wrap: break-word;
        }
        v_block box item txt {
            overflow-wrap: break-word;
        }
        v_page {
            padding: 1em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
    </style>
    <link rel="stylesheet" href="/style/css/app.css">
</head>`;
};

module.exports = render_head;

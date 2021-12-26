const admin_base_list_01 = {
    name: "admin_base_list_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button onclick="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side onload_data"></div>`;
    },
    css: () => {
        return `<style>
                .admin_base_list_01 {
                    background: #101525;
                    color: white;
                }
                v_block {
                    background: linear-gradient(128deg, #2196f33b, rgb(255 255 255 / 15%));
                    border: none;
                    box-shadow: 0 5px 10px black;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }
                
                options_list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.15em;
                }
                
                v_block title {
                    display: inline-flex;
                    font-size: 2em;
                    font-weight: bolder;
                    background: #ffffff17;
                    padding: 0.25em .5em;
                }
                
                item {
                    padding: 0.25em 1em;
                    border: 1px solid rgb(255 255 255 / 10%);
                    background: #ffffff05;
                    box-shadow: 0 1.5px 4px #008eff1f;
                }
            </style>`;
    },
    onload: () => {
        var dataList = (typeof appConfigPageInfo !== "undefined") ? appConfigPageInfo : null;
        if (dataList !== null) {
            var htmlToPrint = `<V_BLOCK>
        <title>Application Config:</title>
            <OPTIONS_LIST>
            <ITEM>Name: ${dataList.appConfig.name}</ITEM>
            <ITEM>Language: ${dataList.appConfig.language}</ITEM>
            <ITEM>Only Secure: ${dataList.appConfig.onlySecure}</ITEM>
            <ITEM>Origin: ${dataList.appConfig.origin}</ITEM>
            <ITEM>Port: ${dataList.appConfig.port}</ITEM>
            <ITEM>Target: ${dataList.appConfig.target}</ITEM>
            <ITEM>Print to Console: ${dataList.appConfig.printConsole}</ITEM>
            <ITEM>Response Timestamp: ${dataList.response_timestamp}</ITEM>
            </OPTIONS_LIST>
        </V_BLOCK>`;
            setTimeout(() => {
                document.querySelector(".admin_base_list_01 ").style.minHeight = "unset";
                document.querySelector(".admin_base_list_01 .onload_data").insertAdjacentHTML("afterbegin", htmlToPrint);
            }, 250);
        }
    },
    disabled: false,
    author: "-v-"
};

module.exports = admin_base_list_01;

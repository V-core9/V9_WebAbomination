const admin_base_list_files_01 = {
    name: "admin_base_list_files_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section onload_data">
                </div>`;
    },
    css: () => {
        return `<style>
                .admin_base_list_files_01 {
                    background: #101525;
                    color: white;
                }
                .admin_base_list_files_01 options_list {
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }

                .admin_base_list_files_01 v_block {
                    background: linear-gradient(128deg, #2196f33b, rgb(255 255 255 / 15%));
                    border: none;
                    box-shadow: 0 5px 10px black;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }
                
                .admin_base_list_files_01 options_list {
                    display: flex;
                    flex-direction: row;
                    gap: 0.15em;
                }
                
                .admin_base_list_files_01 v_block title {
                    display: inline-flex;
                    font-size: 2em;
                    font-weight: bolder;
                    background: #ffffff17;
                    padding: 0.25em .5em;
                }
                
                .admin_base_list_files_01 item {
                    padding: 0.25em 1em;
                    border: 1px solid rgb(255 255 255 / 10%);
                    background: #ffffff05;
                    box-shadow: 0 1.5px 4px #008eff1f;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    overflow: hidden;
            }
            </style>`;
    },
    onload: (uid) => {
        var dataList = (typeof appConfigPageInfo !== "undefined") ? appConfigPageInfo : null;
        if (dataList !== null) {
            var htmlToPrint = `<V_BLOCK>
                <title>List of Files:</title>
                <OPTIONS_LIST headrow="true">
                    <ITEM>Name: </ITEM>
                    <ITEM>mode: </ITEM>
                    <ITEM>ino: </ITEM>
                    <ITEM>size: </ITEM>
                    <ITEM>blocks: </ITEM>
                    <!--ITEM>gid:</ITEM>
                    <ITEM>uid: </ITEM>
                    <ITEM>blksize: </iTEM>
                    <ITEM>dev: </ITEM>
                    <ITEM>nlink: </ITEM>
                    <ITEM>rdev: </ITEM>
                    <ITEM>atimeMs: </ITEM>
                    <ITEM>mtimeMs: </ITEM>
                    <ITEM>ctimeMs: </ITEM>
                    <ITEM>birthtimeMs: </ITEM>
                    <ITEM>atime: </ITEM>-->
                    <ITEM>mtime: </ITEM>
                    <ITEM>ctime: </ITEM>
                    <ITEM>birthtime: </ITEM>
                </OPTIONS_LIST>`;
            dataList.files.forEach(item => {
                htmlToPrint += `<OPTIONS_LIST>
                <ITEM> ${item.name}</ITEM>
                <ITEM> ${item.stats.mode}</ITEM>
                <ITEM> ${item.stats.ino}</ITEM>
                <ITEM> ${item.stats.size}</ITEM>
                <ITEM> ${item.stats.blocks}</ITEM>
                <!--ITEM>gid: ${item.stats.gid}</ITEM>
                <ITEM>dev: ${item.stats.dev}</ITEM>
                <ITEM> ${item.stats.uid}</ITEM>
                <ITEM> ${item.blksize}</ITEM> 
                <ITEM>nlink: ${item.stats.nlink}</ITEM>
                <ITEM>rdev: ${item.stats.rdev}</ITEM>
                <ITEM>atimeMs: ${item.stats.atimeMs}</ITEM>
                <ITEM>mtimeMs: ${item.stats.mtimeMs}</ITEM>
                <ITEM>ctimeMs: ${item.stats.ctimeMs}</ITEM>
                <ITEM>birthtimeMs: ${item.stats.birthtimeMs}</ITEM>
                <ITEM> ${item.stats.atime}</ITEM>-->
                <ITEM> ${item.stats.mtime}</ITEM>
                <ITEM> ${item.stats.ctime}</ITEM>
                <ITEM> ${item.stats.birthtime}</ITEM>
                </OPTIONS_LIST>`;
            });

            return htmlToPrint += `</V_BLOCK>`;
        }
    },
    disabled: false,
    author: "-v-"
};

module.exports = admin_base_list_files_01;

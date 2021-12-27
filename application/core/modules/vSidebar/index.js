const vSidebar = {

    page_data : null,

    api_version: "11.0.147",

    timestamp: Date.now(),

    settings: {
        ui: true,
        ui_pos: "right",
        elem_id: "v_debugger_block",
        open: false
    },

    toggleUI() {
        var item = document.getElementById('v_debugger_block');
        if (item.getAttribute('status') == 'open') {
            item.setAttribute('status', '');
        } else {
            item.setAttribute('status', 'open');
        }
    },

    init() {
        console.log("vSidebar init");

        document.querySelector('body').innerHTML += '<div class="v_block" id="' + vSidebar.settings.elem_id + '" ui_pos="' + vSidebar.settings.ui_pos + '" status="'+(vSidebar.settings.open === true ? 'open' : 'closed') + '"><div class="header"><h2>Sidebar</h2></div><v_dbg_box></v_dbg_box></div>';

        
        window.onclick = () => {
            vSidebar.toggleUI();
        };
    }

};


module.exports = vSidebar;

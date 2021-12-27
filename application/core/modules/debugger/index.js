const vDebugger = {

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
        console.log("vDebugger init");

        document.querySelector('body').innerHTML += '<div class="v_block" id="' + vDebugger.settings.elem_id + '" ui_pos="' + vDebugger.settings.ui_pos + '" status="'+(vDebugger.settings.open === true ? 'open' : 'closed') + '"><div class="header"><h2>V FrontEnd Debugger Tool</h2></div><v_dbg_box></v_dbg_box></div>';

        
        window.onclick = () => {
            vDebugger.toggleUI();
        };
    }

};


module.exports = vDebugger;

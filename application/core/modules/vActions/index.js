const vSidebar = require('../vSidebar');

const vActions = {
    mainNavigationToggle: vSidebar.toggleUI,
    fullscreenToggle: () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    },
};


window.onclick = (e) => {
    const actionName = e.target.getAttribute('action');
    if (typeof vActions[actionName] === 'function') {
        vActions[e.target.getAttribute('action')]();
    }
};

module.exports = vActions;

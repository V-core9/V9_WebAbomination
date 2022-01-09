const vSidebar = require('../vSidebar');
const miniCake = require('../miniCake');
const apiReq = require('../apiReq');

login_resp = async (result) => {
    console.log(result);
    miniCake.set('accessToken', result.accessToken, 5);
    miniCake.set('refreshToken', result.refreshToken, 262800);
    window.location.href = '/application';
};

register_resp = async (result) => {
    alert(JSON.stringify(result));
};


const vActions = {
    mainNavToggle: vSidebar.toggleUI,
    fullscreenToggle: async () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    },

    gotoRegister: async () => {
        window.location.href = '/register';
    },

    gotoLogin: async () => {
        window.location.href = '/login';
    },

    gotoHome: async () => {
        window.location.href = '/home';
    },

    newUserRegister: async () => {
        var raw = JSON.stringify({
            "username": document.querySelector("input[name='username']").value,
            "email": document.querySelector("input[name='email']").value,
            "password": document.querySelector("input[name='password']").value,
            "confirmation": document.querySelector("input[name='confirm_password']").value
        });
        register_resp(await apiReq("https://v-core9.com/api/v1/auth/register", raw, 'POST'));
    },

    loginUser: async () => {
        var raw = JSON.stringify({
            "username": document.querySelector("input[name='username']").value,
            "password": document.querySelector("input[name='password']").value
        });
        login_resp(await apiReq("https://v-core9.com/api/v1/auth/login", raw, 'POST'));
    },
    toggleChat: async () => {
        var element = document.getElementById("XcriptMain");
        if (element.classList.contains("showXcriptChat") !== true) {
            element.classList.add("showXcriptChat");
        } else {
            element.classList.remove("showXcriptChat");
        }
    },
    demoMessage: async () => {  
        var btn;
        btn = '<div class="singleMessage owned"><div class="whoSent"><h3>UserName</h3><p>11:34</p></div><div class="content"><p>';
        btn += document.getElementById("mainMessageContent").value;
        btn += '</p></div></div>';
        if (document.getElementById("mainMessageContent").value !== '') {
            document.querySelector(".messagesArea").insertAdjacentHTML('beforeend', btn);
            var objDiv = document.querySelector(".messagesArea");
            objDiv.scrollTop = objDiv.scrollHeight;
            document.getElementById("mainMessageContent").value = '';
        }
    }
};


window.onclick = async (e) => {
    const actionName = e.target.getAttribute('action');
    if (typeof vActions[actionName] === 'function') {
        vActions[e.target.getAttribute('action')]();
    }
};

module.exports = vActions;

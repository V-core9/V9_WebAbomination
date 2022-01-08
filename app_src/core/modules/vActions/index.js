const vSidebar = require('../vSidebar');
const miniCake = require('../miniCake');

login_success = async (result) => {
    alert(result.accessToken);
    miniCake.set('accessToken', result.accessToken, 5);
    miniCake.set('refreshToken', result.refreshToken, 262800);
};

register_success = async (result) => {
    alert(JSON.stringify(result));
};

api_req = async (path, data, type, callback) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
        method: type,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };
    
    fetch(path, requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result);
            callback(result);
        })
        .catch(error => console.log('error', error));
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
        api_req("https://v-core9.com/api/v1/auth/register", raw, 'POST', register_success);
    },

    loginUser : async () => {
        var raw = JSON.stringify({
            "username": document.querySelector("input[name='username']").value,
            "password": document.querySelector("input[name='password']").value
        });
        api_req("https://v-core9.com/api/v1/auth/login", raw, 'POST', login_success);
    }
};


window.onclick = async (e) => {
    const actionName = e.target.getAttribute('action');
    if (typeof vActions[actionName] === 'function') {
        vActions[e.target.getAttribute('action')]();
    }
};

module.exports = vActions;

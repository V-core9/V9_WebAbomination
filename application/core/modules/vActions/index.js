const vSidebar = require('../vSidebar');
const cookieMonster = require('../cookieMonster');

const vActions = {
    mainNavToggle: vSidebar.toggleUI,
    fullscreenToggle: () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    },

    gotoRegister: () => {
        window.location.href = '/register';
    },

    newUserRegister: () => {
        const username = document.querySelector("input[name='username']").value;
        const password = document.querySelector("input[name='password']").value;
        const confirmation = document.querySelector("input[name='confirm_password']").value;
        const email = document.querySelector("input[name='email']").value;


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "confirmation": confirmation
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://v-core9.com/api/v1/auth/register", requestOptions)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => console.log('error', error));
    },

    loginUser : () => {
        const username = document.querySelector("input[name='username']").value;
        const password = document.querySelector("input[name='password']").value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "username": username,
            "password": password
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://v-core9.com/api/v1/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                alert(result.accessToken);
                cookieMonster.setCookie('accessToken', result.accessToken, 5);
                cookieMonster.setCookie('refreshToken', result.refreshToken, 262800);
            })
            .catch(error => console.log('error', error));
    }
};


window.onclick = (e) => {
    const actionName = e.target.getAttribute('action');
    if (typeof vActions[actionName] === 'function') {
        vActions[e.target.getAttribute('action')]();
    }
};

module.exports = vActions;

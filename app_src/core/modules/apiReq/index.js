const miniCake = require('../miniCake');


const apiReq = {
    urls: {
        refreshToken: '/api/v1/auth/token',
    },
    req: async (path, data, type) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: type,
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        var response = await fetch(path, requestOptions);
        return (response.status === 200) ? await response.json() : { statusCode: response.status };
    },
    refreshToken: async (token) => {
        console.log("🔁 Refreshing access token [ONLOAD] | Next Refresh in 4 minutes.");
        var response = await apiReq.req(apiReq.urls.refreshToken, JSON.stringify({ "token": token }), "POST");
        console.log(response);
        return (response.code === "TOKEN_SUCCESS") ? miniCake.set('accessToken', response.accessToken, 5) : false;
    }
};

module.exports = apiReq;

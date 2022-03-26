apiReq = async (data) => {
  const { method, url, body, callback } = data;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(body),
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};



var arr = window.location.href.split("/");
var pre_url = arr[0] + "//" + arr[2];

const loginForm = {
  data : {
    url: pre_url+"/api/auth/login",
    method: "POST",
    body: {},
    callback: async (data) => {
      if (data.accessToken === undefined){
        alert("Login Failed!");
      } else {
        alert("Login Success!");
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        window.location.href = "/application";
      }
    },
  },

  submitForm: async (e) => {
    loginForm.data.body = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    await apiReq(loginForm.data);

    e.target.elements.email.value = "";
    e.target.elements.password.value = "";
  },

  init: async (selector) => {
    const form = document.querySelector(selector);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      loginForm.submitForm(e);
    });
  },
};

(() => {
  loginForm.init("#login_form");
})();

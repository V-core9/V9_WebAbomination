setCookie = (cname, cvalue, exMinutes) => {
  const d = new Date();
  d.setTime(d.getTime() + (exMinutes * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};


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



const loginForm = {
  data: {
    url: "http://localhost:2000/auth/login",
    method: "POST",
    body: {},
    callback: async (data) => {
      if (data.accessToken === undefined) {
        alert("Login Failed!");
      } else {
        alert("Login Success!");
        setCookie("accessToken", data.accessToken, 5);
        setCookie("refreshToken", data.refreshToken, (60 * 24 * 365));
        window.location.href = "/application/";
      }
    },
  },

  submitForm: async (e) => {
    loginForm.data.body = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    let reqRes = await apiReq(loginForm.data);

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

(async () => {
  let refreshToken = getCookie("refreshToken");

  if (refreshToken)
    apiReq({ url: "http://localhost:2000/auth/token", method: "POST", body: { token: refreshToken }, callback: async (data) => {
      if (data.accessToken !== undefined) {
        setCookie("accessToken", data.accessToken, 5);
        history.back();
      }
    }
  });

  loginForm.init("#login_form");

})();

setCookie = (cname, cvalue, exMinutes) => {
  const d = new Date();
  d.setTime(d.getTime() + (exMinutes * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
}




















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
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setCookie("accessToken", data.accessToken, 5);
        window.location.href = "/dashboard/";
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

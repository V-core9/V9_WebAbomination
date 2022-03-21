document.querySelector("#register_form").addEventListener("submit", (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: e.target.elements.email.value,
    username: e.target.elements.username.value,
    password: e.target.elements.password.value,
    passwordConfirm: e.target.elements.passwordConfirm.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var url = window.location.href;
  var arr = url.split("/");
  var result = arr[0] + "//" + arr[2];

  fetch(result+"/api/user/", requestOptions)
    .then((response) => console.log(response))
    .catch((error) => console.warn(error));

  e.target.elements.username.value = "";
  e.target.elements.email.value = "";
  e.target.elements.password.value = "";
  e.target.elements.passwordConfirm.value = "";
});

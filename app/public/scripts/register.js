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


  fetch("http://localhost:2000/user/", requestOptions)
    .then(async (data) => {
      console.log(data);
      if (data.status === 200) {
        alert("Register Success!");
        window.location.href = "/login/";
      } else {
        alert("Register Failed!");
      }
    })
    .catch((error) => console.warn(error));


  e.target.elements.username.value = "";
  e.target.elements.email.value = "";
  e.target.elements.password.value = "";
  e.target.elements.passwordConfirm.value = "";

});

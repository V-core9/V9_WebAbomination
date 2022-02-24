document.querySelector("#login_form").addEventListener("submit", (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:2500/api/auth/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  e.target.elements.email.value = "";
  e.target.elements.password.value = "";
});

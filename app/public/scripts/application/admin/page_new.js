document.querySelector("#new_page_form").addEventListener("submit", (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    title: e.target.elements.title.value,
    slug: e.target.elements.slug.value,
    content: e.target.elements.content.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    authorization: "Vcore9 " + getCookie("accessToken")
  };


  fetch("/api/pages/", requestOptions)
    .then(response => response.json())
    .then(async (data) => {
      console.log(data);
      if (data.id !== undefined) {
        alert("Register Success!");
        console.log(data);
        window.location.href = "/application/pages/edit/" + data.id;
      } else {
        alert("Register Failed!");
      }
    })
    .catch((error) => console.warn(error));



});

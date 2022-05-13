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
  myHeaders.append("Authorization", "Vcore9 " + getCookie("accessToken"));

  var requestOptions = {
    method: method,
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};


(async () => {

  apiReq({
    url: "/api/users/", method: "GET", callback: async (data) => {
      console.log(data);

      let viewString = '';

      for (let i = 0; i < data.length; i++) {
        let itm = data[i];
        viewString += `<item>
                        <info>
                          <p class='id'>${itm.id}</p>
                          <p class='username'>${itm.username}</p>
                          <p class='email'>${itm.email}</p>
                        </info>
                        <actions>
                          <button class='edit'>Edit</button>
                          <button class='delete'>Delete</button>
                        </actions>
                      </item>`;
      }

      document.querySelector(".typeList content list").innerHTML = viewString;
    }
  });

})();

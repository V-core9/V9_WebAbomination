

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
  const { method, url, callback } = data;

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
  let loc = document.location;
  let id = String(loc).split("/");
  apiReq({
    method: 'GET', url: '/api/pages/?id=' + id[id.length - 1], callback: (data) => {
      console.log(data);

      let content = `<header>
                      <h1>🚀 Dashboard / Pages</h1>
                      <input type='submit' value='Save'>
                    </header>

                    <content>
                      <group>
                        <label for="title">@ Page Title</label>
                        <input type="text" name="title" placeholder="Page Title" value="${data.title}" required="">
                      </group>

                      <group>
                        <label for="slug">📧 Slug</label>
                        <input type="text" name="slug" placeholder="page-slug" value="${data.slug}"  required="">
                      </group>

                      <group>
                        <label for="content">🔑 Content</label>
                        <textarea name="content" placeholder="Random Page Demo Text..." rows="12" required="">${data.content}</textarea>
                      </group>
                    </content>

                    <footer>
                      <input type='submit' value='Save'>
                    </footer>`;

      document.querySelector("#edit_page_form").innerHTML = content;
    }
  });
})();



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


const publicMenu = `<menu>
                      <a href="/">
                        <icon>🏠</icon>
                        <label>Home</label>
                      </a>

                      <a href="/about-us">
                        <icon>🎉</icon>
                        <label>About Us</label>
                      </a>

                      <a href="/contact">
                        <icon>📩</icon>
                        <label>Contact Us</label>
                      </a>

                      <a href="/blog/">
                        <icon>📃</icon>
                        <label>Blog</label>
                      </a>

                      <a href="/tags/">
                        <icon>#</icon>
                        <label>Tags</label>
                      </a>

                      <a href="/users/">
                        <icon>👥</icon>
                        <label>Users</label>
                      </a>

                      <a href="/register">
                        <icon>📃</icon>
                        <label>Register</label>
                      </a>

                      <a href="/login">
                        <icon>🔐</icon>
                        <label>Login</label>
                      </a>
                    </menu>`;


const userMenu = `<menu>
                    <a href="/dashboard">
                      <icon>🚀</icon>
                      <label>Dashboard</label>
                    </a>

                    <a href="/">
                      <icon>🏠</icon>
                      <label>Home</label>
                    </a>

                    <a href="/contact">
                      <icon>📩</icon>
                      <label>Contact Us</label>
                    </a>

                    <a href="/blog/">
                      <icon>📃</icon>
                      <label>Blog</label>
                    </a>

                    <a href="/tags/">
                      <icon>#</icon>
                      <label>Tags</label>
                    </a>

                    <a href="/users/">
                      <icon>👥</icon>
                      <label>Users</label>
                    </a>
                  </menu>

                  <actions>
                    <button action="user_logout">
                      <icon>💢</icon>
                      <label>Logout</label>
                    </button>
                  </actions>`;



const actions = {

  'navigation_toggle': async () => {
    let navContent = getCookie('refreshToken') ? userMenu : publicMenu;
    let nav = document.querySelector('v_app navigation > content');
    nav.innerHTML = navContent;

    document.querySelector('v_app navigation').classList.toggle('open');
  },

  'user_logout': async () => {
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.assign('/');
  },

};

window.onclick = async (event) => {
  const action = event.target.getAttribute('action');

  if (actions[action] !== undefined) {
    actions[action]();
  }
};

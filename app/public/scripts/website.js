const actions = {
  'footer_nav_toggle': async () => {
    const footerNav = document.querySelector('footer navigation');
    footerNav.classList.toggle('open');
  },
  'header_nav_toggle': async () => {
    const headerNav = document.querySelector('header navigation');
    headerNav.classList.toggle('open');
  },
};

window.onclick = async (event) => {
  const action = event.target.getAttribute('action');

  if (actions[action] !== undefined) {
    actions[action]();
  }
}

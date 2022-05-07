const actions = {
  'navigation_toggle': async () => {
    const footerNav = document.querySelector('v_app navigation');
    footerNav.classList.toggle('open');
  },
};

window.onclick = async (event) => {
  const action = event.target.getAttribute('action');

  if (actions[action] !== undefined) {
    actions[action]();
  }
};

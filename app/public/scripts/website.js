const actions = {
  'navigation_toggle': async () => document.querySelector('v_app navigation').classList.toggle('open') || null,
};

window.onclick = async (event) => {
  const action = event.target.getAttribute('action');

  if (actions[action] !== undefined) {
    actions[action]();
  }
};

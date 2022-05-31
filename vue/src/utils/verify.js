import v_rifier from 'v_rifier';
const verify = v_rifier();

verify.register('userRegister', async (username, email, password, confirm, terms) => {
  const uName = await verify.isUsername(username);
  const eMail = await verify.isEmail(email);
  const pass = await verify.isPassword(password, confirm);
  const accepted = (await verify.isBool(terms) && terms == true);
  return uName && eMail && pass && accepted;
});

verify.register('login', async (email, password) =>  await verify.isEmail(email) && await verify.isPassword(password, password));

export default verify;

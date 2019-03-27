const en = {};
const ctx = require.context('.', false, /\.json$/);

ctx.keys().forEach(key => {
  const name = key.slice(2, -5);
  // eslint-disable-next-line
  en[name] = require(`${key}`);
});

export default en;

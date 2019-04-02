const cn = {};
const ctx = require.context('.', false, /\.json$/);

ctx.keys().forEach(key => {
  const name = key.slice(2, -5);
  // eslint-disable-next-line
  cn[name] = require(`${key}`);
});

export default cn;

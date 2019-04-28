const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/business", { target: "http://localhost:5000/" }));
};

var debug = require("debug")("www:server");
var port = null;

//監聽HTTP異動
const onListening = () => {
  debug("Listening on " + port);
};

//設定header(跨域)
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-mock-response-code"
  );
  next();
};

//設定setTimeout
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

module.exports = { onListening, cors, sleep };

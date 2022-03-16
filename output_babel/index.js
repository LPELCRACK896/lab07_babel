"use strict";

var _app = require("./app/app");

require("./CSS/index_style.css");

window.onload = () => {
  (0, _app.startApp)();
  console.log("hola");
};
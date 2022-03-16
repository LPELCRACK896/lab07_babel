"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = void 0;

var _newBook = require("./create-book/newBook");

const startApp = () => {
  for (var i = 4; i < 14; i++) {
    (0, _newBook.newBook)(i);
  }
};

exports.startApp = startApp;
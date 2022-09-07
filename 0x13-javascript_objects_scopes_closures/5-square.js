#!/usr/bin/node
// Create a square class that extends Rectangle class

const Rectangle = require('./4-rectangle');

module.exports = class square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
};

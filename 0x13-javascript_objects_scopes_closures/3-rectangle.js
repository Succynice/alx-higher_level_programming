#!/usr/bin/node
// Prints a Rectangle with the parameters passed

module.exports = class Rectangle {
  constructor (width, height) {
    if (width === 'number' && height === 'number' && width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  print (c) {
    c = 'X';
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};

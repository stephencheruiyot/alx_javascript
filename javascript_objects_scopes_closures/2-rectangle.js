#!/usr/bin/node
/*a class Rectangle 
that defines a rectangle:*/
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {}; // Create an empty object
      }
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  
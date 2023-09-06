#!/usr/bin/node
/*a class Rectangle 
that defines a rectangle:*/
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is 0 or not a positive integer, create an empty object
        return {};
      }
    }
  }
  
  module.exports = Rectangle;
  
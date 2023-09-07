class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {}; // Create an empty object if width or height is invalid
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        let row = '';
        for (let j = 0; j < this.width; j++) {
          row += 'X';
        }
        console.log(row);
      }
    }
  }
  
  module.exports = Rectangle;
  
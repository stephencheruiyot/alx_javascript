class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {}; // Create an empty object if w or h is not a positive integer
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
  
    rotate() {
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  
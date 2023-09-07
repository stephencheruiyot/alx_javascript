class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
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
  
  class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  }
  
  module.exports = { Rectangle, Square };
  
  // Example usage:
  const r1 = new Rectangle(2, 3);
  console.log('Normal:');
  r1.print();
  
  console.log('Double:');
  r1.double();
  r1.print();
  
  console.log('Rotate:');
  r1.rotate();
  r1.print();
  
  const s1 = new Square(4);
  console.log('Square:');
  s1.print();
  
class Square extends require('./5-square') {
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
  
  module.exports = Square;
  
  // Example usage:
  const s1 = new Square(4);
  s1.charPrint();
  s1.charPrint('C');
  
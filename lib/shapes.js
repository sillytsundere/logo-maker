class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
//for universal things that happen in shape

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="160" height="160" x="70" y="20" fill="${this.color}"/>`;
  }
}

class SVG {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }

  // render the svg
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
  }

  // set the shape
  setShape(shape) {
    this.shapeEl = shape.render();
  }

  //set the text
  setText(text, textColor) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square, SVG };

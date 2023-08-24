//for universal things that happen in shape
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//next three classes build off Shape but add specifics for specific shapes
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

//this class hold methods for rendering the svg string to write to the .svg file
class SVG {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }

  // render the svg tag with following setShape and setText methods
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${this.shapeEl}
    ${this.textEl}
    </svg>`;
  }

  // set the shape using the render method
  setShape(shape) {
    this.shapeEl = shape.render();
  }

  //set the text for the svg tag
  setText(text, textColor, isTriangle) {
    if (isTriangle) {
      this.textEl = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }
}

//export this file to use objects and methods in index.js file
module.exports = { Circle, Triangle, Square, SVG };

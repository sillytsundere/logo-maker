const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Triangle, Square, SVG } = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      name: "text",
      type: "input",
      message:
        "Please input up to three characters you would like to be displayed in your logo.",
      validate: (text) => text.length <= 3 || 'Please type no more than three characters.'
    },
    //is it possible to do an if statement for if they enter more than three characters-not letting the prompt proceed?
    //validate
    {
      name: "textColor",
      type: "input",
      message:
        "Please type in a color keyword or a hexadecimal code for the color of your text.",
    },
    {
      name: "shape",
      type: "list",
      message:
        "Please select the shape for your logo from the following choices.",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      name: "shapeColor",
      type: "input",
      message:
        "Please type in a color keyword or a hexadecimal code for the background color of your chosen shape.",
    },
  ])
  .then((response) => {
    console.log(response);
    console.log(response.shape);
    console.log(svgBuilder(response), 'svgBuilder call');
    //do i need fs.writeFile here? write to an .svg file?
    
  });
  
  function svgBuilder(response) {
    // let svgEl = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"></svg>`;
    // switch case of if/then to determine shape
    let shape;

    switch(response.shape) {
      case "Circle":
        shape = new Circle(); //will the render method form the class in shapes.js be in there?
        shape.setColor(response.shapeColor);
        shape.render();
        break;
      case "Square":
        shape = new Square();
        shape.setColor(response.shapeColor);
        shape.render();
        break;
      case "Triangle":
        shape = new Triangle();
        shape.setColor(response.shapeColor);
        shape.render();
        break;
    }
    console.log(response, 'response,', shape, 'shape,', shape.color, 'shape color');
   
    // once shape determined, create class of shape
      // ex let shape = new Circle();
      //shape.setColor(response.shapeColor)
  
      //create SVG class
    let svg = new SVG();
      // use all SVG methods (render being last)
      svg.setText(response.text, response.textColor);

      svg.setShape(shape);

      svg.render();
  
      //write constructed svg string to example file
    
  }

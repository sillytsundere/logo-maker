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
    console.log(svgBuilder(response), 'svgBuilder call');
    //do i need fs.writeFile here? write to an .svg file?
    svgBuilder(response);
    fs.writeFileSync('./example-logos/logo.svg', svgBuilder({...response}));
    console.log('Generated logo.svg!')
  });
  
  function svgBuilder(response) {

    let shape;

    switch(response.shape) {
      case "Circle":
        shape = new Circle(); 
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
    // console.log(response, 'response,', shape, 'shape,', shape.color, 'shape color');
   
    // once shape determined, create class of shape
      // ex let shape = new Circle();
      //shape.setColor(response.shapeColor)
  
      //create SVG class
    let svg = new SVG();
      // use all SVG methods (render being last)
      if (response.shape === "Triangle") {
        svg.setText(response.text, response.textColor, true);
      } else {
        svg.setText(response.text, response.textColor, false);
      }

      svg.setShape(shape);

      let svgString = svg.render();
      
      //write constructed svg string to example file
      return svgString;
    
  }

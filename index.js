const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square, SVG } = require("./lib/shapes.js");

//inquirer function presents prompts to user for customization of logo and the then method builds the svg logo in an svg file and console logs success
inquirer
  .prompt([
    {
      name: "text",
      type: "input",
      message:
        "Please input up to three characters you would like to be displayed in your logo.",
      validate: (text) =>
        text.length <= 3 || "Please type no more than three characters.",
    },
    {
      name: "textColor",
      type: "input",
      message:
        "Please type in a color keyword(ex. green, blue, red, etc.) or a hexadecimal code for the color of your text.",
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
        "Please type in a color keyword(ex. green, blue, red, etc.) or a hexadecimal code for the background color of your chosen shape.",
    },
  ])
  .then((response) => {
    //write constructed svg string to example file
    svgBuilder(response);
    fs.writeFileSync("./example-logos/logo.svg", svgBuilder({ ...response }));
    console.log("Generated logo.svg!");
  });

function svgBuilder(response) {
  let shape;

  //this switch case block determines which shape html element to input into the svg file string based on user input
  switch (response.shape) {
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

  //the SVG class is used to render the svg html string with the SVG class methods
  let svg = new SVG();
  //this if statement chooses different text html tags based on if the chosen shape is a triangle or not so as to properly display the text
  if (response.shape === "Triangle") {
    svg.setText(response.text, response.textColor, true);
  } else {
    svg.setText(response.text, response.textColor, false);
  }

  svg.setShape(shape);

  //setting the returned value of the render method to a variable to be returned as the svg string to write to the svg file
  let svgString = svg.render();
  return svgString;
}

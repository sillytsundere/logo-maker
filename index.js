const inquirer = require("inquirer");
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
    console.log(response)

    // switch case of if/then to determine shape
    // once shape determined, create class of shape
      // ex let shape = new Circle();
      //shape.setColor(response.shapeColor)

      //create SVG class
      // use all SVG methods (render being last)




  });

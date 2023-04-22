const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require('inquirer');
const {
    Circle,
    square,
    Triange
} = require('./lib/shapes');

//Below defines a svg class that has a constructor with 3 methods for rendering and setting the shape and text elements in the svg string.
class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''

    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

//I defined the array of questions using the 'inquirer' library with questions
const questions = [{
        type: "input",
        name: 'text',
        message: 'Text: Enter up to three characters:',
    },
    {
        type: "input",
        name: 'text-color',
        message: 'Text color: Enter a color keyword/or a hexadecimal number:',
    },
    {
        type: "input",
        name: 'shape',
        message: 'Shape color: Enter a color keyword/or a hexadecimal number:',
    },
    {
        type: "list",
        name: 'texpixel-image',
        message: 'Pick which Pixel Image you would like',
        Choices: ['Circle', 'Square', 'Triangle'],
    },
];
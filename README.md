# generate-a-svg-logo

# Object-oriented Programming Challenge: SVG Logo Maker
#
## Description 
This application is a Node.js command-line app that takes the users input to generate a logo and save it as a .svg file. The application prompts the user to seleect a color and shaepe, then prompts them to input the text for desired logo, and finally ave the generated SVG to a .svg file. This in turn will keep the user from having to pay a graphic designer to create a simple logo for their projects.
#
## Visual image of the terminal after generating a .svg logo through the command-line
<img width="1170" alt="Screen Shot 2023-04-24 at 11 47 38 PM" src="https://user-images.githubusercontent.com/127444682/234191717-7177896d-95ca-472b-b6aa-ef11d6410ef6.png">
#
## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
What is SVG: https://en.wikipedia.org/wiki/SVG
SVG Tutorial: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
Generate shapes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
Applying text in logo's: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
logo.svg: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
SVG Link: https://marketplace.visualstudio.com/items?itemName=jock.svg
#
## Below are examples of the three differnt shapes generated by the user through the command line.
<img width="1116" alt="Screen Shot 2023-04-25 at 12 22 40 AM" src="https://user-images.githubusercontent.com/127444682/234192228-4a27b9ee-2d8f-496d-97f7-d937ca649b59.png">

#

## Youtube link to a walk-through demonstrating how to generate a .svg logo through the command-line
#

* [Youtube-demo-link](https://youtu.be/zJK_bs3YEYA)

#

## Code examples of the project

#
--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];


```

**(ABOVE)- Here are the prompt questions for the user to answer to create their logo in the comand line 

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh
    

    const answers = await inquirer.prompt(questions);

	//user inputs text
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		user_text = answers.text;
	} else {
		// no more than chars. or invalid entry
		console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
	};
 
```

**(ABOVE)- Prompts the user for answers

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
    
```

**(ABOVE)- Imports the Circle classe from the 'shapes.js' module and defines a test suite for the shape class.  

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh
  
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle}

```
**(ABOVE)- I have defined the classes of the shapes with const. setting the color value. 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## Author Info

### Amanda Gray

* [Linkedin](https://www.linkedin.com/in/amanda-gray-831a65254/)


## Credits

Shout out to all the TA's and Google Search!

GOOGLE!  Seriously, thank you google search!





© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


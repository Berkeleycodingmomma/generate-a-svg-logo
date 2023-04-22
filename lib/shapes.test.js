
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test for the shape classes.  
const {Circle, Square, Triangle} = require('./shapes')

//Circle shape test
describe('Circle', () => {
    Test('render correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
//Square shape test
describe('Square', () => {
    Test('render correctly', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
//Triangle shape test
describe('Triangle', () => {
    Test('render correctly', () => {
        const shape = new Triangle();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

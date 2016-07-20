//let contains the variable within the code block
if (true) {
	let name = 'Max'; //let is only accessible in this code block
}

//Const does not allow for variable to change
const max = 'Maximilian'; // will not allow a change here
const arr = [25, 33];
arr.push(35); // this will be allowed

//variable hoisting
age = 25; // this will error out, lets and consts have to be initialized before being used

let age;

//fat arrow functions
var fn = () => console.log('hello');

var func = a => a + 5; // if there is only one argument, you can leave off the paranthesis

console.log(func(3));
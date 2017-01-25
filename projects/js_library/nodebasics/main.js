//var hello = require('./player.js')

//use ./ when you're making a module
//if using someone else's, can just say express
//require is synonomous with import
//you now have access to everything in the player.js file
//this keeps your code dry bc you can have more readability
//20 lines in a file

//hello.saysHello();

var player = require('./player.js');
var monster = require('./monster.js');
//often, module name is equal to variable name
var paul = player();
//the name of the file becomes the name of the function
paul.name = "Paul";
console.log(paul.name);

var kenn = player();
kenn.name = "kenn";
	console.log(kenn.name);

var grumpy = monster();
grumpy.name = "grumpy";
	console.log(grumpy.name)
// var x = "Kenn";
// //using var x will never work bc you didnt give it access to the player.js file

//TODO fix roar
// player.name="Kenn";
// player.life="100";
// player.challenge();
//parentheses bc its a function ur calling
//. operator is ACCESSING that file and those properties and functions
//if you try to change player.name to paul, it will overrule kenn
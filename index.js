console.log("hello world");// to print any thing.
//VARIABLES AND CONSTANTS
const name = 'kunal';//const-used to keep data constant.
let age = 19;// let-used if the data can get changed i.e varies.
console.log(age);
let isApproved=false;
let Color=null;
console.log(typeof isApproved);
console.log(typeof Color);
// JavaScript is dynamic programming language i.e the data type of variable can be changed later in the program if needed.
console.log(typeof age);
console.log(name);
age = "nineteen";
console.log(typeof age);
console.log(age);
//OBJECT-it is mutable.
let details={
    fname:'kunal',
    lname:'sharan',
    age:19
};
console.log(details);
console.log(typeof details);
//Dot notation for the update
details.age=20;
details.fname='Kunal';
//Bracket notation
details['lname']='Sharan';
console.log(details);
//used when you don't know which property is going to change.
let selectChoice = 'lname';
details[selectChoice]='sharan';
console.log(details);
//ARRAY-It is a datastructure used to store list of items with different datatypes.
let arrayNew = ['one',1,'two',2,false];
console.log(arrayNew);
console.log(typeof arrayNew);
console.log(arrayNew.length);
console.log(arrayNew[0]);
arrayNew[5]= 25;
console.log(arrayNew);
console.log(arrayNew.length);
//FUNCTIONS
function greet(name,age){
    console.log('Hello'+' '+ name + ' '+ 'age:' + age);
}
greet('Kunal',19);
//Calculations
function square(number){
    return number*number;
}
let sq1=square(5);
console.log('square of the given number'  + ' = ' + sq1);
console.log(square(10));//Two function call one is the square function and other is the console function to print.
let message="You have tree new notifications";
let user="brian";
console.log(user+", "+message+"!");//It concatanates i.e combines the two together
let messageToUser=message+", "+user+"!";
console.log(messageToUser);
let points=5;
let bonusPoints="10";
console.log(points+bonusPoints);//number datatype gets converted to string datatypes as in string vs number string wins.
let firstNumber=randomNumber(2,11);
// Function to generate random number
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
console.log(firstNumber);

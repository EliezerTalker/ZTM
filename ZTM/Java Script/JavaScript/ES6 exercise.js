// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let { firstName, lastName, age, eyeColor} = person;
/*
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;*/


// Object properties
let a = 'test';
let b = true;
let c = 789;

/*
var okObj = {
  a: a,
  b: b,
  c: c
};
*/

const okObj = {a,b,c}


// Template strings
//var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

   let sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


let funcExpression = (username, location) => username && location ? "I am not lost" : "I am totally lost!";
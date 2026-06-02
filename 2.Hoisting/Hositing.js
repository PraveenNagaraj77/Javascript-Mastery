console.log("==================================");
console.log("JAVASCRIPT HOISTING");
console.log("==================================");


/*
Definition:
Hoisting is JavaScript's behavior of moving declarations
to the top of their scope before code execution.
*/

// ======================================
// 1. var Hoisting
// =====================================

console.log("\n1. var Hoisting");


console.log(employee);
var employee = "Praveen";
console.log(employee);

/*
Internally JavaScript treats it as:

var employee;

console.log(employee);

employee = "Praveen";

console.log(employee);
*/



// ======================================
// 2. let Hoisting
// ======================================

console.log("\n2. let Hoisting");


/*

console.log(city);

let city = "Chennai";

Result:
ReferenceError

*/

let city = "Chennai";
console.log(city);

// ======================================
// 3. const Hoisting
// ======================================

console.log("\n3. const Hoisting");

/*

console.log(country);

const country = "India";

Result:
ReferenceError

*/

const country = "India";
console.log(country);

// ======================================
// 4. Temporal Dead Zone (TDZ)
// ======================================

console.log("\n4. Temporal Dead Zone");

/*
TDZ = Time between entering scope and variable declaration.

Accessing let/const during TDZ causes ReferenceError.
*/

let language = "JavaScript";

console.log(language);

// ======================================
// 5. Function Hoisting
// ======================================

console.log("\n5. Function Hoisting");


greet();

function greet(){
    console.log("Hello Praveen");
}

/*
Function declarations are completely hoisted.
*/


// ======================================
// 6. Function Expression Hoisting
// ======================================

console.log("\n6. Function Expression");


/*

sayHello();

var sayHello = function() {
    console.log("Hello");
};

Result:
TypeError: sayHello is not a function

*/


var sayHello = function () {
    console.log("Hello from Function Expression");
};

sayHello();

// ======================================
// 7. Arrow Function Hoisting
// ======================================

console.log("\n7. Arrow Function");



/*

welcome();

const welcome = () => {
    console.log("Welcome");
};

Result:
ReferenceError

*/

const welcome = () => {
    console.log("Welcome from Arrow Function");
};

welcome();

// ======================================
// 8. var Inside Function
// ======================================

console.log("\n8. var Inside Function");


function testVar(){
    console.log(x);
    var x = 100;
    console.log(x);
}

testVar();

// ======================================
// 9. let Inside Block
// ======================================


console.log("\n9. let Block Scope");

{
    let score = 90;
    console.log(score);
}

/*

console.log(score);

Result:
ReferenceError

*/

// ======================================
// 10. Hoisting Interview Example
// ======================================

console.log("\n10. Interview Example");


var a = 10;

function demo(){
    console.log(a);
    var a = 20;
    console.log(a);
}

demo();


// ======================================
// 11. Function Declaration vs Expression
// ======================================

console.log("\n11. Declaration vs Expression");

display();
function display(){
    console.log("Function Declaration works");
}



var show =  function(){
    console.log("Function Expression");
};
show();


console.log("\nHOISTING SUMMARY");

console.log("var -> Hoisted with undefined");
console.log("let -> Hoisted but TDZ");
console.log("const -> Hoisted but TDZ");
console.log("Function Declaration -> Fully Hoisted");
console.log("Function Expression -> Not Fully Hoisted");
console.log("Arrow Function -> Not Fully Hoisted");








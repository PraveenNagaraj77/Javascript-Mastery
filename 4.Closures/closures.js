console.log("=================================");
console.log("JAVASCRIPT CLOSURES");
console.log("=================================");

// =====================================
// 1. Basic Closure
// =====================================

console.log("\n1. Basic Closure");

function outer() {

    let message = "Hello Praveen";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();

result();

// =====================================
// 2. Counter Example
// =====================================

console.log("\n2. Counter Example");

function createCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

// =====================================
// 3. Data Privacy
// =====================================

console.log("\n3. Data Privacy");

function bankAccount() {

    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        getBalance() {
            console.log("Current Balance:", balance);
        }
    };
}

const account = bankAccount();

account.getBalance();
account.deposit(500);
account.getBalance();

// =====================================
// 4. Multiple Closures
// =====================================

console.log("\n4. Multiple Closures");

function greeting(name) {

    return function () {
        console.log("Welcome " + name);
    };
}

const user1 = greeting("Praveen");
const user2 = greeting("John");

user1();
user2();

// =====================================
// 5. Event Handler Example
// =====================================

console.log("\n5. Event Handler Concept");

function createButtonHandler(buttonName) {

    return function () {
        console.log(buttonName + " clicked");
    };
}

const saveButton = createButtonHandler("Save");

saveButton();

// =====================================
// 6. setTimeout Closure
// =====================================

console.log("\n6. setTimeout Example");

function timer() {

    let message = "Timer Completed";

    setTimeout(function () {
        console.log(message);
    }, 2000);
}

timer();

// =====================================
// 7. Interview Example
// =====================================

console.log("\n7. Interview Example");

function employee(name) {

    return function(role) {

        console.log(name + " works as " + role);
    };
}

const emp = employee("Praveen");

emp("Full Stack Developer");

// =====================================
// 8. Module Pattern
// =====================================

console.log("\n8. Module Pattern");

const calculator = (function() {

    let result = 0;

    return {

        add(num) {
            result += num;
            console.log(result);
        },

        subtract(num) {
            result -= num;
            console.log(result);
        }
    };

})();

calculator.add(10);
calculator.add(20);
calculator.subtract(5);



// Examples

function outer(){
    let outerVariable = "Outer Variable";
    function inner(){
        let innerVariable = "Inner Variable";
        console.log(innerVariable); // Accessing inner variable
        console.log(outerVariable); // Accessing outer variable
    }
}

outer(); // Calling outer function to create closure
inner();
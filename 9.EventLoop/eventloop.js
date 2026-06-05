// ==========================================
// EVENT LOOP
// ==========================================

console.log("===== EVENT LOOP =====");

/*
JavaScript Runtime Components

1. Call Stack
2. Web APIs
3. Callback Queue (Macrotask Queue)
4. Microtask Queue
5. Event Loop
*/

// ==========================================
// EXAMPLE 1: CALL STACK
// ==========================================


console.log("\n=========Call Stack===============");

function first(){
    console.log("First Function");
}

function second(){
    console.log("Second Function");
}

first();
second();


// ==========================================
// EXAMPLE 2: WEB API + CALLBACK QUEUE
// ==========================================

console.log("\n===== WEB API & CALLBACK QUEUE =====");

console.log("Start");

setTimeout(()=>{
    console.log("Timer Callback");
},6000);

console.log("End");

// ==========================================
// EXAMPLE 3: MICROTASK QUEUE
// ==========================================


console.log("\n===== MICROTASK QUEUE =====");

console.log("Script Start");

Promise.resolve().then(()=>{
    console.log("Promise Callback");
});

console.log("Scipt End");

// ==========================================
// EXAMPLE 4: MICROTASK VS MACROTASK
// ==========================================

console.log("\n===== MICROTASK VS MACROTASK =====");


console.log("A");
setTimeout(()=>{
    console.log("B");
},0);

Promise.resolve().then(()=>{
    console.log("C");
})

console.log("D");
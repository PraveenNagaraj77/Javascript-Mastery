// async function greet() {
//     return "Hello Praveen";
// }

// greet().then(message => {
//     console.log(message);
// })


// function getMessage(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Welcome to JavaScript");
//         },2000);
//     })
// }


// async function displayMessage(){
//     const message = await getMessage();
//     console.log(message);
// }



// displayMessage();

//===========User Login================

// console.log("User Login");

// function loginUser() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Login Successfull");
//         },3000)
//     })
// }


// async function login() {
//     console.log("Logging In");
//     const result  = await loginUser();

//     console.log(result);
// }


// login();


//============Job Application Flow


// function applyJob(){
//     return Promise.resolve("Job Applied");
// }

// function verifyResume(){
//     return  Promise.resolve("Resume Verified");
// }

// function scheduleInterview(){
//     return  Promise.resolve("Interview Scheduled")
// }

// async function processApplication() {
//     console.log(await applyJob());
//     console.log(await verifyResume());
//     console.log(await scheduleInterview());
// }

// processApplication()




function payment(){
    return new Promise((resolve,reject)=>{
        const paymentSuccess = true;
        if (paymentSuccess) {
            resolve("Payment Successfull")
        } else {
            reject("Payment Failed")
        }
    })
}

async function makePayment() {
    try {
        const result = await payment();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

makePayment()


///==================api call===========

console.log("Api call");


async function fetchUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log(user.name);
    } catch (error) {
        console.log(error);
    }
}

fetchUser()
// function placeOrder(callback){
//     console.log("Order Placed");
//     console.log(callback);
//     callback();
// }


// function prepareFood(){
//     console.log("Food is Being Prepared");
// }

// placeOrder(prepareFood);



// function downloadResume(callback){
//     console.log("Downloading Resume......");

//     setTimeout(()=>{
//         console.log("Download Complete");

//         callback()
//     },3000);
// }

// function openResume(){
//     console.log("Opening Resume..");
// }

// downloadResume(openResume)

//

// function register(callback){
//     console.log("Registering User");

//     setTimeout(()=>{
//         console.log("User Registred SuccessFully");
//         callback();
//     },3000);

// }


// function sendWelcomeEmail(){
//     console.log("Welcome to the new Beginning");
// }

// register(sendWelcomeEmail);




// function fetchUser(callback){
//     console.log("Fetching User Data");

//     setTimeout(()=>{
//         const user = {
//             name:"Praveen",
//             role:"Fullstack Developer"
//         }
//         callback(user);
//     },2000)
// }


// function displayUser(user){
//     console.log("User Name : " ,user.name);
//     console.log("Role : " , user.role);
// }

// fetchUser(displayUser)


function getUsers(callback){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(data=>{
        callback(data);
    })
}

function displayUsers(users){
    console.log(users);
}

getUsers(displayUsers)




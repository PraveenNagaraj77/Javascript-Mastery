// function loginUser(){
//     return new Promise((resolve,reject)=>{
//         const isLogin = true;

//         if (isLogin) {
//             resolve("Login Successful")
//         } else {
//             reject("Invalid Credentials")
//         }
//     })
// }


// loginUser().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



// function fetchUser(){
//     fetch("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
//         console.log(response);
//         return response.json()
//     }).then(user=>{
//         console.log(user.name);
//     }).catch((error=>{
//         console.log(error);
//     }))
// }
// fetchUser();


function login(){
    return new Promise((resolve,reject)=>{
        const isLogin = true
        setTimeout(()=>{
            if (isLogin) {
                resolve("User Logged in");
            } else {
                reject("Invalid Credentials")
            }
        },1000)
    })
}

function addToCart(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Product added to cart");
        },1000)
    })
} 


function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Placed");
        }, 1000);
    });
}

function makePayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment Successful");
        }, 1000);
    });
}

function generateInvoice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Invoice Generated");
        }, 1000);
    });
}


login().then((data)=>{
    console.log(data);
    return addToCart();
}).then((data)=>{
    console.log(data);
    return placeOrder();
}).then((message) => {
        console.log(message);
        return makePayment();
    })
    .then((message) => {
        console.log(message);
        return generateInvoice();
    }).then((message) => {
        console.log(message);
        console.log("Order Process Completed");
    }).catch((error) => {
        console.log(error);
    });
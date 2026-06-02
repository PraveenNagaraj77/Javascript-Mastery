// const person = {
//     name:"Praveen",

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// person.greet(); // Hello Praveen


// function greet(){
//     console.log(this);
// }

// greet(); // global object (window in browser, global in node)


// const person = {
//     name:"Praveen", 
//     greet(){
//         const inner = () =>{
//             console.log(`Hello ${this.name}`);
//         }
//         inner();
//     }
// }

// person.greet(); // Hello Praveen




const account = {
    accountHolder: "Praveen",
    balance: 1000,

    showBalance(){
        console.log(`${this.accountHolder}'s balance is ${this.balance}`);     
    }
}

account.showBalance(); // Praveen's balance is 1000

const cart={
    product:"Laptop",
    price:60000,

    showProducts(){
        console.log(`The product is ${this.product} and the price is ${this.price}`);
    }
}

cart.showProducts(); // The product is Laptop and the price is 60000


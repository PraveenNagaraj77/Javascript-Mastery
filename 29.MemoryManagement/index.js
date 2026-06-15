// Stack Memory
// Stores Primitive Values

let name = "Praveen";
let age = 25;



// Heap Memory
// Stores Object
const user = {
    name:"Praveen"
}


const user1 = {
    name:"Naveen"
}

const user2 = user1;

user2.name = "Raghul";

console.log(user2.name);
console.log(user1.name);

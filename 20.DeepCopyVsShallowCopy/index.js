let a = 10;
let b = a;

b=20;

console.log(a);
console.log(b);


//Primities are copied by value

const user1 = {
    name:"Praveen"
};

const user2 = user1;

user2.name = "Raghul";

console.log(user1.name);
console.log(user2.name);

//Beacuse objects are copied by reference
//Both variables point to yhe same object in the memory


//Shallow COPY

const employee = {
    name:"Praveen",
    address:{
        city:"chennai"
    }
};

const copy  = { ...employee };

copy.name = "Raghul";

console.log(employee.name);
console.log(copy.name);

copy.address.city = "Bangalore";

console.log(copy.address.city);
console.log(employee.address.city);


const deepcopy = structuredClone(employee);
deepcopy.address.city = "Hyderabad";

console.log(employee.address.city);
console.log(deepcopy.address.city);
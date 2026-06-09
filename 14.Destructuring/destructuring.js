
// const employee={
//     name:"praveen",
//     role:"Fullstack Developer",
//     salary:"50000"
// };


// const name = employee.name;
// const role = employee.role;


// console.log(name);
// console.log(role);

// const { name:employeeName , role } = employee;

// console.log(employeeName);
// console.log(employeeName);


const response ={
    userId : 101,
    userName:"praveen",
};

const { userId , userName } = response;

console.log(userId);
console.log(userName);


//Array Destructruing

const colors = ["red","blue","green"];



const [ first , second ] = colors;

console.log(first);
console.log(second);

//Function Parameter Destructring

// const employee = {
//     name:"Praveen",
//     role:"Developer",
// };


// function displayEmployee({ name,role }){
//     console.log(name);
//     console.log(role);
// }


// displayEmployee();


//Real time Interview Example

const apiResponse = {
    id:101,
    name:"Praveen",
    role:"Java Fullstack Developer",
    location:"Chennai"
};

const { name , role , place } = apiResponse;

console.log(`${name} works as ${role} in ${place}`);
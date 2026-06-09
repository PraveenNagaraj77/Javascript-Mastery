const fruites = [ "apple","banana", "mango", "grapes","watermelon" ,"papaya" ]

fruites.forEach(function(fruit){
    console.log(fruit);
})


//arrow 

fruites.forEach(fruit=>{
    console.log(fruit);
})

const result = fruites.forEach(fruit=> fruit *2);
console.log(result);

//Does not return a new array

//real time eg

const emplyees = [
    "Praveen",
    "Sanjjey",
    "Srini",
    "Uday",
    "Vicky"
];


emplyees.forEach(employee => {
    console.log(`Welcome ${employee}`);
})

//Creates a new array by transforming each element

//MAP

const numbers = [2,4,6,8,10];

const final = numbers.map(number => number+1);
console.log(final);


//Real time 
//Backend Sends Employee Name

const employees = [
    "Praveen",
    "Sanjjey",
    "Srini",
    "Uday",
    "Vicky"
];


const greetings = employees.map(employee=> `Hello ${employee}`);
console.log(greetings);


//Filter 
//returns a element thaty satisy a condition

const numbersss = [10,20,30,40,50,60];

const filtered = numbersss.filter(num=>num>35);
console.log(filtered);


//Real time 
//Filter Active Users

const users = [
    {name:"Praveen", active:true},
    {name:"Rahul", active:false},
    {name:"Karthik", active:true}
];

const activeUser = users.filter(user=>user.active);

console.log(activeUser);
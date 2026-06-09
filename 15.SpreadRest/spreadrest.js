//Rest Operator

const employees = [
    "Praveen","Sanjjey","Srini","Uday","Vicky"
];

const [ teamlead , AIMLEngineer ,...teammembers ] = employees;

console.log(teamlead);
console.log(AIMLEngineer);
console.log(teammembers);


///Rest in Function Parameters

function add(a,b){
    return a+b;
}


function add(...numbers){
    console.log(numbers); 
}

add(10,20,30,40,50)



///Spread Operator

const numbers = [10,20,30];

console.log(...numbers);

const arr1 = [1,2,3];
const arr2 = arr1;
console.log(arr2);

arr2.push(4);
console.log(arr2);
console.log(arr1==arr2);


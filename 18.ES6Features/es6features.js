
class Employee{
    constructor(name , role , salary = 30000){ //default parameter
        this.name=name;
        this.role=role;
        this.salary=salary;
    }

    displayInfo(){
        console.log(`${this.name} works as  a ${this.role} and earns ${this.salary}`);
    };

}


const emp1 = new Employee("Praveen","Frontend Developer",50000);

const emp2 = new Employee("Kishore","Backend Developer");


console.log(emp1);
console.log(emp2);



//Array of employees;

const employees = [emp1,emp2]
console.log(employees);


//Spread Operator

const newEmployees = [
    ...employees,
    new Employee("Kumar","Fullstack Developer",70000)
];


console.log(newEmployees);



//Arrow Function + map

const employeeNames = newEmployees.map(emp=>emp.name);

console.log("Employee Names");
console.log(employeeNames);

//Object Destructring

const { name,role,salary } = emp1
console.log("Destructured Employee");
console.log(name,role,salary);

//Array Destructring
const [ firstEmployee , secondEmployee ] = newEmployees;

console.log("\nFirst Emmployee");
firstEmployee.displayInfo();

console.log("\nSecond Emmployee");
secondEmployee.displayInfo();

//Rest Operator

function calculateSalary(...employeeList){
    let total = 0;

    employeeList.forEach(emp=>{
        total+=emp.salary;
    })
    return total;
}

console.log(`\nTotal Salary : ${calculateSalary(...newEmployees)}`);

//Promise

function getCompanyMessage(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Welcome to ES6");
        },1000);
    });
}

//Async Await

async function showMessage() {
    const message = await getCompanyMessage();
    console.log(`\n${message}`);
}

showMessage();

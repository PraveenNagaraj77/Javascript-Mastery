const employee = {
    name:"Praveen",
    role:"Developer",
    experience:2
};

const { name,role,experience } = employee;

console.log(name);

//

// const employeeMap = new Map();

// employeeMap.set("name","Praveen");
// employeeMap.set("role","Developer");

// console.log(employeeMap.get("role"));

/// Creating a Map

const employeeMap = new Map();

employeeMap.set("name","Praveen");
employeeMap.set("role","Developer");
employeeMap.set("salary",60000);

console.log(employeeMap);

console.log(employeeMap.has("salary"));
console.log(employeeMap.size);
console.log(employeeMap.delete("salary"));
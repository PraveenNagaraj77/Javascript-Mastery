import { add,subtract } from "./math.js";
import { user } from "./user.js";
import { multiply , divide } from "./calculator.js"
import employeeDetails from "./employee.js";
import product , { GST , calculateTax } from "./product.js";

import * as Utils from "./utilities.js"

console.log(add(10,20));
console.log(subtract(20,10));
console.log(multiply(5,4));
console.log(divide(20,5));

console.log(user);


console.log(employeeDetails);



console.log(Utils.PI);
console.log(Utils.cube(3));
console.log(Utils.square(5));
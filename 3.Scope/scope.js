//================
//Global Scope
//================

console.log("Global Scope");

let company = "EY";

function showCompany() {
    console.log(company);
}

showCompany(); // EY



//================
//Function Scope
//================      
console.log("Function Scope");
function showCity() {
    let city = "Vellore";
    console.log(city);
}   

showCity(); // Vellore

//================
//Block Scope
//================
console.log("Block Scope");
{
    let country = "India";
    console.log(country);
}


//================
// Scope Chain
//================
console.log("Scope Chain");

let comapny = "EY";

function outer(){
    let department = "IT";
    function inner(){
        console.log(comapny);
        console.log(department);
    }

    inner();
}

outer(); // EY IT


//================
//Lexical Scope
//================
console.log("Lexical Scope");


function parent(){
    let message = "Hello from parent function";
    function child(){
        console.log(message);
    }
    child();
}
parent(); // Hello from parent function




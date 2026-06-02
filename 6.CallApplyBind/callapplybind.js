let name = {
    firstName:"Praveen",
    lastName:"Nagaraj"
}


let name2 = {
    firstName:"Dhanush",
    lastName : "Nagaraj"
}

let printFullName =function(hometown,language){
        console.log(this.firstName + " " + this.lastName + " from " + hometown , "Knows " + language);
    }

//Call Method

//Function Borrowing

printFullName.call(name);
printFullName.call(name2);
printFullName.call(name2,"Bengaluru","Kannada")
//Apply Method


printFullName.apply(name,["Chennai","English"])

//Bind Method

let printMyName = printFullName.bind(name2,"Mumbai","Maharastra")
console.log(printMyName);

printMyName();
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ,I am ${this.name}`);
    }

    
}

const p1 = new Person("Praveen",25);

p1.greet();


// Employee Managhement System

class Employee{
    constructor(id,name,role){
        this.id=id;
        this.name=name;
        this.role = role;
    }

    displayDetails(){
        console.log(`${this.id}-${this.name}-${this.role}`);
    }

}

const emp1 = new Employee(
    102,
    "Praveen",
    "Developer"
);


const emp2 = new Employee(
    103,
    "Gokul",
    "SAP"
)

emp1.displayDetails();
emp2.displayDetails();

// 

class Product{
    #stock;

    constructor(stock){
        this.#stock=stock;
    }


    buy(quantity){
        if(quantity>this.#stock){
            console.log(`Out of Stock`);
        }

        return;
    }

    

}
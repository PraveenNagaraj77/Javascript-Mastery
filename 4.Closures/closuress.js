function pizzaOrder(type){
    return function(){
        console.log("Pizza of type " + type + " is ready! Enjoy your meal!");
    };
}

const myOrder = pizzaOrder("Pepperoni");
myOrder(); // Output: Pizza of type Pepperoni is ready! Enjoy your meal!

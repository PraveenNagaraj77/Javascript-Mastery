const marks = [75,80,90];

const updatedMarks = marks.map(mark=>mark+5);

console.log(updatedMarks);

// //

console.log("Shoping Cart");

const prices = [100,200,300];

const total = prices.reduce((sum,price)=>sum+price,0);
console.log(total);
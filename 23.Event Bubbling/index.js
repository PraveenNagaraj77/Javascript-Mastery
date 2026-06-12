document.getElementById("parent").addEventListener("click",()=>{
    console.log("Parent Clicked");
});


document.getElementById("child").addEventListener("click",()=>{
    console.log("Button Clicked");
})

// EVent Capturingh

document.getElementById("parent1").addEventListener("click",()=>{
    console.log("Parent Clicked");
},true);


document.getElementById("child1").addEventListener("click",()=>{
    console.log("Button Clicked");
},true)

//Event Propagation Stop

document.getElementById("child2").addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("button");
})

// EVent Delegation

// const items = document.querySelectorAll("li");

// items.forEach(item=>{
//     item.addEventListener("click",()=>{
//         console.log(item.textContent);
//     })
// })



document.getElementById("fruits").addEventListener("click",(event)=>{
    console.log(event.target.textContent);
})

console.log("eCommerce");



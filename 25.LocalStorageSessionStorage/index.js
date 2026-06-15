const user = {
    name:"Praveen",
    role:"Developer"
};

localStorage.setItem(
    "user",JSON.stringify(user)
);

const loggedInUser = JSON.parse(
    localStorage.getItem("user")
);

console.log(loggedInUser);

// Dark Mode

document.getElementById("darkModeBtn").addEventListener("click",()=>{
    localStorage.setItem("theme","dark");
})

const theme = localStorage.getItem("theme");


if(theme === "dark"){
    document.body.classList.add("dark")
}


const cart =[
    "Iphone",
    "Laptop",
    "Headphones"
];

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
)



const cartItems = JSON.parse(
    localStorage.getItem("cart")
);

console.log(cartItems);
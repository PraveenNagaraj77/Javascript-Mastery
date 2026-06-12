//QuerySelector

// Get Element By ID

const heading = document.getElementById("title");
console.log(heading);

//querySelector

const subHeading = document.querySelector(".subtitle");
console.log(subHeading);

const para = document.querySelectorAll("p");
console.log(para);

title.textContent = "Dom Manipulation";

title.innerHTML = "<span>Hello Praveen</span>";

const greet = document.getElementById("greet");

greet.style.color = "red";
greet.style.fontSize = "40px";

greet.classList.add("active");

greet.classList.toggle("active");

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://github.com");

const heading1 = document.createElement("h1");
heading1.textContent = "Welcome";

document.body.appendChild(heading1);

const msg = document.getElementById("msg");
msg.remove();


const btn = document.getElementById("btn");

btn.addEventListener(
    "click",()=>{
        console.log("Button Clicked");
    }
)

let count =0;

const counter = document.getElementById("count");

const button = document.getElementById("increment");


button.addEventListener(
    "click",()=>{
        count++;

        counter.textContent = count;
    }
)


const button2 = document.getElementById("toggle");

button2.addEventListener(
    "click",()=>{
        document.body.classList.toggle("dark");
    }
)
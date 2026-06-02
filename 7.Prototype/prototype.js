

let arr = ["Praveen","Nagaraj"];

let object = {
    name:"praveen",
    city:"Vellore",
    getIntro: function(){
        console.log(this.name + "from" + this.city);
    }
}

let object2 ={
    name:"Dhanush"
}

object2.__proto__ = object
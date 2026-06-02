///Learning Platofrom


const user = {
    login(){
        console.log("User Logged in");
    },
    logout(){
        console.log("User Logged Out");
    }
}

const instructor={
    createCourse(){
        console.log("Course Created");
    }
}


Object.setPrototypeOf(instructor,user);


instructor.login();
instructor.createCourse();
instructor.logout();
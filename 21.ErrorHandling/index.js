function login(username,password){
    try {
        if(!username || !password){
            throw new Error("Username and password are required");
        }
        console.log("Login Successfull");
    } catch (error) {
        console.log("Login Failed" + error.message);
    }
}

login("praveen","123456");
login("","123456")
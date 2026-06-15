const BASE_URL = "https://api.company.com";

function getData(baseUrl, endpoint){
    return `${baseUrl}/${endpoint}`;
}

console.log(getData(BASE_URL, "users"));
console.log(getData(BASE_URL, "products"));
console.log(getData(BASE_URL, "orders"));


// With Currying

function createAPI(baseUrl){

    return function(endpoint){

        return `${baseUrl}/${endpoint}`;

    };

}

const api = createAPI("https://api.company.com");

console.log(api("users"));
console.log(api("products"));
console.log(api("orders"));
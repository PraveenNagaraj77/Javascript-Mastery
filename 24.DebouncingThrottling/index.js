function debounce(callback,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            callback(...args);
        },delay);

    }
}

function searchProducts(query){
    console.log(`API CALL : ${query}`);
}


const debouncedSearch = debounce(searchProducts,5000);

document.getElementById("search").addEventListener("input",(event)=>{
    debouncedSearch(event.target.value)
})


// 
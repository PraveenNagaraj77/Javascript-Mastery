//default +  named export


export const GST = 18;

export function calculateTax(price){
    return price * GST /100;
}


const product = {
    id:1,
    name:"Laptop"
};

export default product;
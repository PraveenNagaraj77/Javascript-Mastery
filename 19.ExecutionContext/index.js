function placeOrder(){
    console.log("Order Placed");
    processPayment();
}

function processPayment(){
    console.log("Payment Processing");
    generateInvoice();
}

function generateInvoice(){
    console.log("Invoice Generated");
}

placeOrder()
